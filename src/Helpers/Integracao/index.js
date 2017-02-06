import * as CONFIG from '@configs/Webserver';


class Integracao {
    getPosts() {
        return fetch(CONFIG.WP_SERVER + '/posts' );
    }

    getPostsByCategory( categoryId ) {
        return fetch(CONFIG.WP_SERVER + '/posts?categories=' + parseInt( categoryId ) );

    }

    getCategories() {
        return fetch(CONFIG.WP_SERVER + '/categories' );
    }
}

export default new Integracao();