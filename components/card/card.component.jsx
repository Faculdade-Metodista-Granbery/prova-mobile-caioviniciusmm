import React, {useState} from 'react';
import { StyleSheet, View, Vibration } from 'react-native';
import { Card, Paragraph, Button, ProgressBar, Colors } from 'react-native-paper';
import {Stopwatch} from 'react-native-stopwatch-timer';


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F8E7E2',
        margin: 10,
        borderRadius: 20,
        flex: 1,
        width: 300,
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
        marginBottom: 20,
        fontWeight: 'bold'
    },
    rectangle: {
        height: 12,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 15
      },     
    }
);
const options = {
    container: {
      padding: 5,
      borderRadius: 5,
      flex: 1,
      alignSelf: 'center',
      marginBottom: 8
    },
    text: {
      fontSize: 13,
      color: 'black',
      marginLeft: 7,
      alignItems: 'center'
    },
  };

const CardQuote = ({task, background}) => {
    const [iconePlay, setIcon] = useState('play')
    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [resetStopwatch, setResetStopwatch] = useState(false);
    const [tempo, setTempo] = useState(0);
    if (tempo==15){
        Vibration.vibrate(1000)}

    const cliquebotao = () => {
        if (iconePlay == 'play'){
            setIcon('pause') 
            setIsStopwatchStart(!isStopwatchStart);
            setResetStopwatch(false);
        }else {
            setIcon('play') 
            setIsStopwatchStart(false);
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
                <Button icon= {iconePlay} style={styles.botao} labelStyle={{fontSize: 100}} onPress= {cliquebotao} color='#8b0000'> 
                </Button>
            </Card.Actions>
            <Paragraph style={styles.texto}>
                    {task}
            </Paragraph>
            <Stopwatch
            laps
            msecs
            start={isStopwatchStart}

            reset={resetStopwatch}
         
            options={options}
        
            getTime={(time) => {
              if(time > '00:00:15:00'){
                  setIsStopwatchStart(false);
                  setResetStopwatch(true);
                  setIcon('play')  
              }; 
              let p = time.split(':');
              let date = new Date('00','00','0000',p[0],p[1],p[2],p[3]);
              let seg = date.getSeconds()
              setTempo(seg)
              } 
            }
            />
            <ProgressBar progress={tempo/15} color={Colors.red800}></ProgressBar>
        </Card>
    )
}

export default CardQuote;