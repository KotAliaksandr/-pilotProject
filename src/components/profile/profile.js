import { removeToken, removeUserEmail } from '../../shared/ls-service';
import { routes } from '../../shared/constants/routes';

export const logautBtnHendler = () => {
    const logautBtn = document.getElementById('logautBtn');
    logautBtn.onclick = () => {
        removeToken();
        removeUserEmail();
        window.location.href = routes.sign_in;    
    };
};
