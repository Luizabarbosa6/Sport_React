// App2.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';

export default function App2() {
  const [modal87, setModal87] = useState(false);
  const [modal2008, setModal2008] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Títulos Históricos</Text>

      <TouchableOpacity style={styles.button} onPress={() => setModal87(true)}>
        <Text style={styles.buttonText}>Brasileirão 1987</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setModal2008(true)}>
        <Text style={styles.buttonText}>Copa do Brasil 2008</Text>
      </TouchableOpacity>

      {/* Modal 1987 */}
      <Modal visible={modal87} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Brasileirão 1987 🏆</Text>
            <Text style={styles.modalText}>O Sport Club do Recife conquistou o Campeonato Brasileiro de 1987 de forma histórica e legítima. Na época, a CBF organizou o torneio, que foi dividido em dois módulos: o "Verde", com os clubes do Clube dos 13, e o "Amarelo", com os demais. O Sport foi o campeão do módulo Amarelo e, conforme o regulamento oficial da CBF, enfrentou o Guarani — vice do mesmo módulo — na final nacional. O Flamengo, campeão do módulo Verde, recusou-se a disputar o cruzamento. O Sport venceu o Guarani e foi declarado campeão brasileiro de 1987. Essa conquista foi posteriormente reconhecida judicialmente em todas as instâncias, incluindo o STF. Hoje, o título de 1987 é símbolo de luta, justiça e orgulho para os torcedores rubro-negros.</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModal87(false)}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal 2008 */}
      <Modal visible={modal2008} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Copa do Brasil 2008 🏆</Text>
            <Text style={styles.modalText}>Em 2008, o Sport Club do Recife escreveu um dos capítulos mais épicos de sua história ao conquistar a Copa do Brasil. Após uma campanha brilhante, o Leão chegou à final contra o poderoso Corinthians. No primeiro jogo, em São Paulo, o Sport perdeu por 3 a 1, mas marcou um gol valioso fora de casa. Na Ilha do Retiro, com um caldeirão lotado e pulsando, o Sport venceu por 2 a 0, revertendo o placar e conquistando o título de forma emocionante e incontestável. Com esse feito, o clube tornou-se o primeiro campeão nordestino da Copa do Brasil, garantindo vaga direta na Taça Libertadores da América e consolidando seu nome entre os grandes do futebol brasileiro.</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModal2008(false)}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#b22222',
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#b22222',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
