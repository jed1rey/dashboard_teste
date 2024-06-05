import healthcare from "../../assets/healthcare.png";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <div className="dashboard__container">
        <div className="dashboard__title">
          <img src={healthcare} alt="Hello" />
          <div className="dashboard__greeting">
            <h1>Olá, atendente</h1>
            <p>Bem vindo ao seu Painel</p>
          </div>
        </div>
        <div className="dashboard__cards">
          <div className="card">
            <i className="fa fa-history fa-2x text-lightblue"></i>
            <div className="card_inner">
              <p className="text-primary-p">Total de atendimentos</p>
              <span className="font-bold text-title"> 558 atendimentos</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-users fa-2x text-green"></i>
            <div className="card_inner">
              <p className="text-primary-p">Atendimentos em aberto</p>
              <span className="font-bold text-title"> 10 pessoas na fila </span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-star fa-2x text-yellow"></i>
            <div className="card_inner">
              <p className="text-primary-p">Avaliações</p>
              <span className="font-bold text-title"> 4/5</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
