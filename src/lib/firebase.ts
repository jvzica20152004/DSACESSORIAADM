import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  initializeFirestore,
  doc, 
  getDocFromServer, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  limit, 
  where 
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Firestore with long-polling to prevent stream disconnection issues in iframe environments
function createFirestoreInstance() {
  const dbId = firebaseConfig.firestoreDatabaseId;
  try {
    return initializeFirestore(app, {
      experimentalForceLongPolling: true,
    }, dbId);
  } catch {
    return dbId ? getFirestore(app, dbId) : getFirestore(app);
  }
}

export const db = createFirestoreInstance();

// Connectivity validation required by Firebase skill
export async function testConnection(): Promise<boolean> {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
    return true;
  } catch {
    return false;
  }
}

export interface SolicitacaoContabilData {
  id?: string;
  clientName: string;
  companyName?: string;
  email?: string;
  phone: string;
  serviceType: 'contabil' | 'fiscal' | 'financeiro' | 'rh' | 'abertura_empresa' | 'completo';
  regimeTributario?: 'simples_nacional' | 'lucro_presumido' | 'lucro_real' | 'mei' | 'ainda_nao_sei';
  message?: string;
  status: 'pendente' | 'em_analise' | 'atendido';
  createdAt: string;
}

export async function salvarSolicitacaoContabil(
  dados: Omit<SolicitacaoContabilData, 'id' | 'createdAt' | 'status'>
): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    const docData: Record<string, any> = {
      clientName: dados.clientName.trim(),
      phone: dados.phone.trim(),
      serviceType: dados.serviceType,
      status: 'pendente',
      createdAt: new Date().toISOString()
    };

    if (dados.companyName?.trim()) {
      docData.companyName = dados.companyName.trim();
    }
    if (dados.email?.trim()) {
      docData.email = dados.email.trim();
    }
    if (dados.regimeTributario) {
      docData.regimeTributario = dados.regimeTributario;
    }
    if (dados.message?.trim()) {
      docData.message = dados.message.trim();
    }

    // Primary collection requested by user: assessoria_contabil
    const docRef = await addDoc(collection(db, 'assessoria_contabil'), docData);

    // Also mirror to all collection variations (acessoria_contabil, acessoriacontabil, assessoriacontabil, acessoria-contabil, etc.)
    const mirrorCollections = [
      'acessoria_contabil',
      'acessoriacontabil',
      'assessoriacontabil',
      'acessoria-contabil',
      'assessoria-contabil',
      'solicitacoes_contabeis',
      'leads'
    ];

    for (const colName of mirrorCollections) {
      try {
        await addDoc(collection(db, colName), docData);
      } catch (mirrorErr) {
        console.warn(`Mirror write note for ${colName}:`, mirrorErr);
      }
    }

    return { success: true, id: docRef.id };
  } catch (err: any) {
    console.error('Erro ao salvar no Firestore:', err);
    return { success: false, error: err?.message || 'Falha ao salvar no banco de dados' };
  }
}

export async function buscarSolicitacoesPorTelefone(telefone: string): Promise<SolicitacaoContabilData[]> {
  try {
    const q = query(
      collection(db, 'assessoria_contabil'),
      where('phone', '==', telefone.trim()),
      limit(10)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(d => ({
      id: d.id,
      ...d.data()
    })) as SolicitacaoContabilData[];
  } catch (err) {
    console.error('Erro ao buscar solicitações:', err);
    return [];
  }
}

export async function listarTodasSolicitacoes(): Promise<SolicitacaoContabilData[]> {
  try {
    const snapshot = await getDocs(collection(db, 'assessoria_contabil'));
    const items = snapshot.docs.map(d => ({
      id: d.id,
      ...d.data()
    })) as SolicitacaoContabilData[];
    
    // Sort descending by createdAt
    return items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } catch (err) {
    console.error('Erro ao listar solicitações:', err);
    return [];
  }
}
