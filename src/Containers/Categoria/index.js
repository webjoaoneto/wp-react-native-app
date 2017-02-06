import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container, Content, List, ListItem, Text } from 'native-base';

import Integracao from '@helpers/Integracao';

import {default as PostsComponent} from '@components/Posts';


export default class Categoria extends Component {
    categoria = null;

    constructor(props) {
        super(props);

        this.categoria = props.categoria;

        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        Integracao.getPostsByCategory( this.categoria.id )
             .then((response) => response.json())
             .then( (responseJson) => {
                this.setPosts( responseJson );
             }).done();
    }

    setPosts( data ) {
        this.setState( { posts: data } );
    }

    getPosts() {
        return this.state.posts
    }

    render() {
        let posts      = this.getPosts();

        return (
            <Container style={{marginTop: 52 }}>
                <Content>
                    <List>
                        <PostsComponent title={ "Posts na categoria " + this.categoria.name } posts={posts} />
                    </List>
                </Content>
            </Container>
        );
    }
}