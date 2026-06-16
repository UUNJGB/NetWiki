import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { gamesData } from '../data/gamesData';

export default function GameDetailsScreen({ route }) {
  const { gameId } = route.params;
  const game = gamesData.find((g) => g.id === gameId);
  const [activeTab, setActiveTab] = useState('characters');

  if (!game) return <View style={styles.container}><Text>Game not found</Text></View>;

  const getContent = () => {
    const tabs = { characters: game.characters, items: game.items, strategies: game.strategies, locations: game.locations };
    return tabs[activeTab] || [];
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{game.name}</Text>
        <Text style={styles.description}>{game.description}</Text>
      </View>
      <View style={styles.tabs}>
        {['characters', 'items', 'strategies', 'locations'].map((tab) => (
          <TouchableOpacity key={tab} style={[styles.tabButton, activeTab === tab && styles.tabButtonActive]} onPress={() => setActiveTab(tab)}>
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.content}>
        <FlatList data={getContent()} renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            {item.rarity && <Text style={styles.rarity}>Rarity: {item.rarity}</Text>}
          </View>
        )} keyExtractor={(item) => item.id} scrollEnabled={false} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { backgroundColor: '#007AFF', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  description: { fontSize: 14, color: '#e0e0e0' },
  tabs: { flexDirection: 'row', backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#e0e0e0' },
  tabButton: { flex: 1, paddingVertical: 12, alignItems: 'center' },
  tabButtonActive: { borderBottomWidth: 3, borderBottomColor: '#007AFF' },
  tabText: { fontSize: 12, color: '#666', fontWeight: '500' },
  tabTextActive: { color: '#007AFF', fontWeight: 'bold' },
  content: { padding: 15 },
  itemCard: { backgroundColor: '#fff', borderRadius: 8, padding: 15, marginBottom: 12 },
  itemName: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  itemDescription: { fontSize: 13, color: '#666', marginBottom: 8 },
  rarity: { fontSize: 12, color: '#FF6B00', fontWeight: 'bold' }
});