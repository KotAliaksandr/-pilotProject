import { renderPosts, postFormHendler } from './dom-hendlers/posts-renderer';
import { routes, paths } from './shared/constants/routes';
import { signInHendler } from './components/sign-in/sign-in';
import { getToken } from './shared/ls-service';
import { logautBtnHendler } from './components/profile/profile';
import { signUpHandler } from './components/sign-up/sign-up';

import './styles/styles.scss';

window.onload = () => {

    const pathName = Object.values(paths).find( path => path === window.location.pathname );

    switch (pathName) {
        case paths.home:

        const token = getToken();

        if (!token) {
            window.location.href = routes.sign_in;
        } else {
            renderPosts();
            postFormHendler();
            logautBtnHendler();
        };
        break;
        case paths.sign_in:
            signInHendler();
            break;
        case paths.sign_up:
            signUpHandler();
            break;
        default:
            break;
    };
};
