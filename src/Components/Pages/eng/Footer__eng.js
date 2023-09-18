import React from 'react';
import {useTranslation} from 'react-i18next'; // Импортируем useTranslation из react-i18next
import '../../Style/eng/Index__eng.scss';
import '../../Style/rus/Index__rus.scss'; // Или другой корректный путь


function Footer__eng() {
    const {t} = useTranslation(); // Используем хук useTranslation для получения функции перевода t

    return (
        <>
            <footer>
                <h2>{t('footer.contactNetworks')}</h2> {/* Используем функцию t для перевода текста */}
                <div data-aos="fade-down"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-duration="2000"
                     className="d-flexx">
                    <a href="https://t.me/joha_17">
                        <div className="telegram">
                            <img src="../imgs/icons/telegram.png" alt="1"/>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/jaavooh">
                        <div className="instagram">
                            <img src="../imgs/icons/instagram.png" alt="2"/>
                        </div>
                    </a>
                    <a href="https://discord.gg/5qDtSCs4">
                        <div className="discord">
                            <img src="../imgs/icons/discord.png" alt="3"/>
                        </div>
                    </a>
                    <a href="mailto:johax9@gmail.com">
                        <div className="gmail">
                            <img src="../imgs/icons/gmail.png" alt="4"/>
                        </div>
                    </a>
                </div>

                <div className="text__about">
                    <h3>{t('footer.innovativeDesignFunctionality')}</h3>
                    <h3>{t('footer.professionalDevelopment')}</h3>
                    <h3>{t('footer.designInFigma')}</h3>
                </div>

                <div className="Coder">
                    <img className="Coder1" src="../imgs/Coder1.png" alt=""/>
                    <img className="Coder2" src="../imgs/Coder2.png" alt=""/>
                </div>
            </footer>
        </>
    );
}

export default Footer__eng;
