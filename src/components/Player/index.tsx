import styles from './styles.module.scss';

export function Player () {


    return (
       <div className={styles.playerContainer}>

           <header>
               <img src="/playing.svg" />
                <strong>Tocando agora</strong>

           </header>

           <div className={styles.emptyPlayer}>

                <strong>Selecione um podcast para ouvir</strong>

           </div>

           <footer className={styles.empty}>
                <div className={styles.progress}>
                    <span>00:00</span>
                    <div className={styles.slider}>
                        <div className={styles.emptySlider} />
                    </div>
                    <span>00:00</span>

                </div>

                <div className={styles.buttons}>
                    <button type="button">
                        <img src="/shuffle.svg" />
                    </button>

                    <button type="button">
                        <img src="/play-previous.svg" />
                    </button>

                    <button type="button" className={styles.playButton}>
                        <img src="/play.svg" />
                    </button>

                    <button type="button">
                        <img src="/play-next.svg" />
                    </button>

                    <button type="button">
                        <img src="/repeat.svg" />
                    </button>


                </div>

           </footer>


       </div>

    );

}