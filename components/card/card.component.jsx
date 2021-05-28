import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Paragraph, Button } from 'react-native-paper';


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#EBF5F7',
        margin: 10,
        borderRadius: 20,
        flex: 1,
        width: '50vh',
        overflow: 'hidden',
        marginBottom: 40
    },
    content: {
        backgroundColor: '#FAE8E0',
    },
    cover: {
        height: 220,
    },
    botao: {
        alignItems: 'center',
        flex: 1,
        borderRadius: 50
    },
    texto: {
        textAlign: 'center',
        fontSize: 20,
        flex: 1,
        marginBottom: 20
    },
    rectangle: {
        height: 20,
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5
      }     
    }
);

const CardQuote = ({task, background}) => {
    const [iconePlay, setIcon] = useState('play')
    const [barraCor, setCorBarra] = useState('#D8848F')
    const cliquebotao = () => {
        if (iconePlay == 'play'){
            setIcon('pause') 
            setCorBarra('#B25963')
        }else {
            setIcon('play') 
            setCorBarra('#D8848F')
        }
    }

    return (
        <Card style={styles.card}>
            <Card.Cover
                style={styles.cover}
                resizeMode={`cover`}
                source={{ uri: background }} />
            <Card.Content style={styles.content}>
            </Card.Content>
            <Card.Actions>
                <Button icon= {iconePlay} style={styles.botao} labelStyle={{fontSize: 100}} onPress= {cliquebotao}> 
                </Button>
            </Card.Actions>
            <Paragraph style={styles.texto}>
                    {task}
            </Paragraph>
        <View style={[styles.rectangle, { backgroundColor: barraCor}]}>
        </View>
        </Card>
    )
}

export default CardQuote;