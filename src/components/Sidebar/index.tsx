import style from './style.module.css'

export function Sidebar() {
    return (
        <div className={style.sidebar}>
            <div>
                <img src="./logo.png" alt="Logo" />
                <h2>Focus Flow</h2>
            </div>
            <div>
                <ul>
                    <li className={style.itens}>
                        <i className="fas fa-home"></i>
                        <a href="#">Início</a>
                    </li>
                    <li className={style.itens}>
                        <i className="fas fa-history"></i>
                        <a href="#">Histórico</a>
                    </li>
                    <li className={style.itens}>
                        <i className="fas fa-tasks"></i>
                        <a href="#">Hábitos</a>
                    </li>
                    <li className={style.itens}>
                        <i className="fas fa-chart-line"></i>
                        <a href="#">Dashboard</a>
                    </li>
                    <li className={style.itens}>
                        <i className="fas fa-cog"></i>
                        <a href="#">Configurações</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}