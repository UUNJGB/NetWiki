import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { gamesData } from '../data/gamesData';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList data={gamesData} renderItem={({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('GameDetails', { gameId: item.id, name: item.name })}>
          <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
          <View style={styles.cardContent}>
            <Text style={styles.gameName}>{item.name}</Text>
            <Text style={styles.gameDescription} numberOfLines={2}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      )} keyExtractor={(item) => item.id} contentContainerStyle={styles.listContent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  listContent: { padding: 10 },
  card: { backgroundColor: '#fff', borderRadius: 10, marginBottom: 15, overflow: 'hidden', elevation: 3 },
  thumbnail: { width: '100%', height: 200, backgroundColor: '#e0e0e0' },
  cardContent: { padding: 15 },
  gameName: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  gameDescription: { fontSize: 14, color: '#666' }
});