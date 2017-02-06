import React from 'react';
import {Text, ScrollView} from 'react-native';
import Drawer from 'react-native-drawer';

import { Grid, Col, Row, List, ListItem } from 'native-base';

import {Actions, DefaultRenderer} from 'react-native-router-flux';
import Integracao from "@helpers/Integracao";

import {StyleSheet } from 'react-native';

class SideMenu extends React.Component {

    constructor( props ) {
        super(props);

        this.state = {
            categorias: [],
        };
    }

    setCategories( categorias ) {
        this.setState( { categorias } );
    }
    componentWillMount() {
        Integracao.getCategories()
            .then((response) => response.json())
            .then( (responseJson) => {
                let cats = [];

                responseJson.forEach( ( c ) => {
                    if( c.count > 0 )
                        cats.push(c);
                })
                this.setCategories( cats );
            }).done();

    }

    render() {
        let categorias = this.state.categorias;
        const gotoCategoria = ( categoria ) => Actions.categoria( { 
                                                    categoria: categoria, 
                                                    title: "Artigos em " + categoria.name } );
        return (
            <Grid style={{backgroundColor: '#f3f3f3'}}>
                <Row size={9}>
                    <Col style={Styles.headerCol} >
                        <Text style={Styles.menuHeader}>Noivas Fortaleza</Text>
                    </Col>
                </Row>
                <Row size={91}>
                    <ScrollView>
                        <Col>
                            <List>
                                <ListItem itemDivider>
                                    <Text>Categorias do Site</Text>
                                </ListItem>
                                {categorias.map( ( categoria, i ) => 
                                    <ListItem key={categoria.id} onPress={() => gotoCategoria( categoria )}>
                                        <Text>{categoria.name} ({categoria.count})</Text>
                                    </ListItem>
                                )}
                            </List>
                        </Col>
                    </ScrollView>
                </Row>
            </Grid>
        )
    }
}

export default class extends React.Component {
    render(){
        const state = this.props.navigationState;
        const children = state.children;
        return (
            <Drawer
                ref="navigation"
                open={state.open}
                onOpen={()=>Actions.refresh({key:state.key, open: true})}
                onClose={()=>Actions.refresh({key:state.key, open: false})}
                type="displace"
                content={<SideMenu />}
                tapToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan={true}
                tweenHandler={(ratio) => ({
                 main: { opacity:Math.max(0.54,1-ratio) }
            })}>
                <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}


const Styles =  StyleSheet.create({
    headerCol: {
        backgroundColor: '#ee4e9a'
    },

    menuHeader: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 18,
        margin: 10
    }
});