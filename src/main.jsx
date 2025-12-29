import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Users, 
  Calendar, 
  Activity, 
  TrendingUp, 
  ClipboardCheck, 
  Plus, 
  Trophy,
  Dumbbell,
  DollarSign,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('asistencia');
  
  // PLANTEL OFICIAL D'BARRIO 2025
  const [jugadores, setJugadores] = useState([
    { id: 1, nombre: 'Jean Giron', asistencia: 0, peso: 78, grasa: 21, vueltas: 8, deuda: 15 },
    { id: 2, nombre: 'Jhony (Lobo)', asistencia: 0, peso: 74, grasa: 19, vueltas: 10, deuda: 15 },
    { id: 3, nombre: 'Kevin Ccopa', asistencia: 0, peso: 80, grasa: 22, vueltas: 7, deuda: 15 },
    { id: 4, nombre: 'Alexin', asistencia: 0, peso: 72, grasa: 18, vueltas: 9, deuda: 15 },
    { id: 5, nombre: 'Antony', asistencia: 0, peso: 76, grasa: 20, vueltas: 8, deuda: 15 },
    { id: 6, nombre: 'Bruno Prada', asistencia: 0, peso: 82, grasa: 23, vueltas: 6, deuda: 15 },
    { id: 7, nombre: 'Edison', asistencia: 0, peso: 75, grasa: 19, vueltas: 9, deuda: 15 },
    { id: 8, nombre: 'Eduardo Villalta', asistencia: 0, peso: 79, grasa: 21, vueltas: 8, deuda: 15 },
    { id: 9, nombre: 'Henry Valentin', asistencia: 0, peso: 77, grasa: 20, vueltas: 9, deuda: 15 },
    { id: 10, nombre: 'Jean Carlos', asistencia: 0, peso: 73, grasa: 18, vueltas: 10, deuda: 15 },
    { id: 11, nombre: 'Jesus Arapa', asistencia: 0, peso: 81, grasa: 24, vueltas: 7, deuda: 15 },
    { id: 12, nombre: 'Jheyson', asistencia: 0, peso: 76, grasa: 20, vueltas: 9, deuda: 15 },
    { id: 13, nombre: 'Cediño Mayor', asistencia: 0, peso: 84, grasa: 25, vueltas: 6, deuda: 15 },
    { id: 14, nombre: 'Cediño Menor', asistencia: 0, peso: 70, grasa: 17, vueltas: 11, deuda: 15 },
    { id: 15, nombre: 'Tolentino', asistencia: 0, peso: 78, grasa: 21, vueltas: 8, deuda: 15 },
    { id: 16, nombre: 'Yoel Villa', asistencia: 0, peso: 75, grasa: 19, vueltas: 9, deuda: 15 },
  ]);

  const [asistenciaSemanal, setAsistenciaSemanal] = useState(
    jugadores.map(j => ({ id: j.id, nombre: j.nombre, asistio: false }))
  );

  const toggleAsistencia = (id) => {
    setAsistenciaSemanal(prev => prev.map(item => 
      item.id === id ? { ...item, asistio: !item.asistio } : item
    ));
  };

  const registrarPago = (id) => {
    setJugadores(prev => prev.map(j => 
      j.id === id ? { ...j, deuda: 0 } : j
    ));
  };

  const totalDeuda = jugadores.reduce((acc, curr) => acc + curr.deuda, 0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24">
      {/* Header Corporativo D'BARRIO */}
      <header className="bg-slate-900 text-white p-6 shadow-xl border-b-4 border-yellow-500 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black tracking-tighter uppercase leading-none">D'BARRIO</h1>
            <p className="text-yellow-500 italic text-[10px] font-bold tracking-widest uppercase mt-1">en la cancha y en la vida</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em]">Cuerpo Técnico</p>
            <p className="text-xs font-bold text-white bg-white/10 px-2 py-1 rounded mt-1">Gestión 2025</p>
          </div>
        </div>
      </header>

      {/* Navegación por Roles */}
      <nav className="flex justify-start md:justify-center bg-white border-b border-slate-200 sticky top-[84px] z-20 overflow-x-auto no-scrollbar shadow-sm">
        <button 
          onClick={() => setActiveTab('asistencia')}
          className={`px-5 py-4 flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === 'asistencia' ? 'border-b-4 border-slate-900 text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
        >
          <ClipboardCheck size={16} /> COO: Asistencia
        </button>
        <button 
          onClick={() => setActiveTab('salud')}
          className={`px-5 py-4 flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === 'salud' ? 'border-b-4 border-slate-900 text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
        >
          <Dumbbell size={16} /> COO: Salud
        </button>
        <button 
          onClick={() => setActiveTab('finanzas')}
          className={`px-5 py-4 flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === 'finanzas' ? 'border-b-4 border-slate-900 text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
        >
          <DollarSign size={16} /> CFO: Finanzas
        </button>
        <button 
          onClick={() => setActiveTab('stats')}
          className={`px-5 py-4 flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === 'stats' ? 'border-b-4 border-slate-900 text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
        >
          <TrendingUp size={16} /> CEO: Estrategia
        </button>
      </nav>

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        
        {/* TAB ASISTENCIA (COO) */}
        {activeTab === 'asistencia' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-200">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-xl font-black uppercase text-slate-800 tracking-tighter italic">Control de Campo</h2>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1 underline decoration-yellow-500">COO: Vaciado de encuestas de WhatsApp</p>
                </div>
                <div className="bg-slate-900 text-white p-3 rounded-2xl text-center min-w-[80px]">
                  <p className="text-[9px] font-black uppercase opacity-60">Semana</p>
                  <p className="text-lg font-black">{new Date().toLocaleDateString('es-PE', { week: 'numeric' })}</p>
                </div>
              </div>
              
              <div className="grid gap-2">
                {asistenciaSemanal.map(jugador => (
                  <div key={jugador.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 group transition-all">
                    <span className="font-bold text-slate-700 text-sm tracking-tight">{jugador.nombre}</span>
                    <button 
                      onClick={() => toggleAsistencia(jugador.id)}
                      className={`px-6 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-sm active:scale-90 ${jugador.asistio ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-500'}`}
                    >
                      {jugador.asistio ? 'CONFIRMADO' : 'PENDIENTE'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB SALUD (COO - RENDIMIENTO) */}
        {activeTab === 'salud' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {jugadores.map(j => (
                <div key={j.id} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200 relative overflow-hidden group hover:border-yellow-400 transition-all">
                  <div className="flex justify-between items-start mb-5">
                    <h3 className="font-black text-slate-800 text-lg tracking-tighter">{j.nombre}</h3>
                    <div className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-tighter">
                      Base 30+
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-slate-50 p-3 rounded-2xl text-center border border-slate-100">
                      <p className="text-[8px] text-slate-400 font-black uppercase mb-1">Peso</p>
                      <p className="text-xl font-black text-slate-900 leading-none">{j.peso}<span className="text-[10px] ml-0.5">kg</span></p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-2xl text-center border border-slate-100">
                      <p className="text-[8px] text-slate-400 font-black uppercase mb-1">Grasa</p>
                      <p className="text-xl font-black text-slate-900 leading-none">{j.grasa}<span className="text-[10px] ml-0.5">%</span></p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-2xl text-center border border-slate-100">
                      <p className="text-[8px] text-slate-400 font-black uppercase mb-1">Vueltas</p>
                      <p className="text-xl font-black text-slate-900 leading-none">{j.vueltas}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB FINANZAS (CFO) */}
        {activeTab === 'finanzas' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-yellow-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 underline">La Bóveda D'Barrio</p>
                <p className="text-5xl font-black tracking-tighter">S/ 0.00</p>
                <div className="mt-6 flex gap-4">
                  <div className="bg-white/10 px-4 py-2 rounded-xl">
                    <p className="text-[8px] font-black text-slate-400 uppercase">Por cobrar</p>
                    <p className="text-lg font-black text-red-400">S/ {totalDeuda}.00</p>
                  </div>
                </div>
              </div>
              <DollarSign className="absolute bottom-[-30px] right-[-30px] w-48 h-48 text-white/5 rotate-12" />
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-8 border-b border-slate-100">
                <h2 className="text-xl font-black uppercase text-slate-800 tracking-tighter italic">Cuentas Claras</h2>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">CFO: Seguimiento de aportes del mes</p>
              </div>
              <div className="divide-y divide-slate-100">
                {jugadores.map(j => (
                  <div key={j.id} className="p-5 flex justify-between items-center hover:bg-slate-50 transition-all">
                    <div className="flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full ${j.deuda > 0 ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
                      <div>
                        <p className="font-black text-slate-800 text-sm tracking-tight">{j.nombre}</p>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Cuota: S/ 10 + Cumple: S/ 5</p>
                      </div>
                    </div>
                    <div className="text-right flex items-center gap-4">
                      {j.deuda > 0 ? (
                        <>
                          <p className="text-sm font-black text-red-500 tracking-tighter">Debe S/ {j.deuda}.00</p>
                          <button 
                            onClick={() => registrarPago(j.id)}
                            className="bg-slate-900 text-white p-2 rounded-lg hover:bg-green-600 transition-all"
                            title="Registrar Pago"
                          >
                            <CheckCircle2 size={16} />
                          </button>
                        </>
                      ) : (
                        <span className="text-green-600 font-black text-[10px] uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full border border-green-100">Saldado</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB ESTRATEGIA (CEO) */}
        {activeTab === 'stats' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden group text-center">
              <div className="relative z-10">
                <Trophy className="mx-auto mb-4 w-12 h-12 text-yellow-500" />
                <h3 className="text-slate-900 font-black uppercase text-2xl tracking-tighter mb-2">ANIVERSARIO D'BARRIO</h3>
                <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.3em] underline decoration-yellow-500">Próximo: 7 de Febrero</p>
              </div>
              <Activity className="absolute bottom-[-30px] right-[-30px] text-slate-50 w-52 h-52 group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        )}

      </main>

      <footer className="fixed bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-200 p-5 text-center z-40">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
           <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.3em]">
            D'BARRIO • 2025
          </p>
          <p className="text-[9px] text-slate-300 font-black uppercase tracking-widest italic">
            En la cancha y en la vida
          </p>
        </div>
      </footer>
    </div>
  );
};

// Renderizado directo para mayor estabilidad
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}xport default App;
