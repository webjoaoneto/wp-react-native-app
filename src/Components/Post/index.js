import React, { Component } from 'react';

import {StyleSheet, WebView } from 'react-native';

import { Grid, Row, Col, Text, Button} from 'native-base';


export default class Post extends Component {
    webview = null;

    constructor(props) {
        super(props);

        this.state = {
            tamanho: 122,
            post: props.post,
        };
    }

    _postMessage = ( ) => {
        this.webview.postMessage( "Hello" );
        console.log( "Posted message" );
    }

    _receivedMessage = ( e )  => {
        console.log("Received message");
        this.setState( { tamanho: parseInt(e.nativeEvent.data)} );
    }

    componentDidMount() {
        this._postMessage();
    }

    render() {
        let post = this.state.post;
        //fix para tamanho do webview
        
        let HTML ='<html>' +
                    '<head>' +
                        '<title></title>' +
                    '</head>' +
                    '<body>' +
                        post.content.rendered +
                    '</body>' +
                '</html>';

        let styles = {
            height: this.state.tamanho
        };

        let javascript =   'window.location.hash = 1;' +
                            'document.title = document.body.scrollHeight;' +
                            'window.postMessage( document.body.scrollHeight );';

        return (
            <Grid>
                <Row>
                    <Col>
                        <Text style={Styles.title}>{post.title.rendered}</Text>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button style={Styles.button}>Pedir orçamento</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <WebView
                            ref={webview => { this.webview = webview; }}
                            injectedJavaScript={javascript}
                            javaScriptEnabled={true}
                            javaScriptEnabledAndroid={true}
                            onMessage={this._receivedMessage}  
                            style={styles} 
                            source={{html: HTML}}  />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const Styles =  StyleSheet.create({
    button: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },

    title: {
        fontWeight: 'bold',
        fontSize: 28,
        margin: 10
    },

    content: {
        flex: 1,
        height: 1200,
        margin: 10
    }
});