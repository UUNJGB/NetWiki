import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { gamesData } from '../data/gamesData';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim().length === 0) { setResults([]); return; }
    
    const lowerQuery = query.toLowerCase();
    const searchResults = [];
    gamesData.forEach((game) => {
      if (game.name.toLowerCase().includes(lowerQuery)) searchResults.push({ type: 'game', id: game.id, name: game.name, description: game.description });
      game.characters?.forEach((char) => {
        if (char.name.toLowerCase().includes(lowerQuery)) searchResults.push({ type: 'character', id: `char_${char.id}`, name: char.name, description: `From: ${game.name}` });
      });
      game.items?.forEach((item) => {
        if (item.name.toLowerCase().includes(lowerQuery)) searchResults.push({ type: 'item', id: `item_${item.id}`, name: item.name, description: `From: ${game.name}` });
      });
    });
    setResults(searchResults);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Search games, characters, items..." placeholderTextColor="#999" value={searchQuery} onChangeText={handleSearch} />
      {results.length > 0 ? (
        <FlatList data={results} renderItem={({ item }) => (
          <View style={styles.resultCard}>
            <Text style={styles.resultName}>{item.name}</Text>
            <Text style={styles.resultType}>{item.type.toUpperCase()}</Text>
            <Text style={styles.resultDescription}>{item.description}</Text>
          </View>
        )} keyExtractor={(item) => item.id} contentContainerStyle={styles.resultsList} />
      ) : searchQuery.length > 0 ? (
        <View style={styles.noResults}><Text style={styles.noResultsText}>No results found</Text></View>
      ) : (
        <View style={styles.noResults}><Text style={styles.noResultsText}>Start typing to search</Text></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 10 },
  searchInput: { marginHorizontal: 10, marginBottom: 15, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#fff', borderRadius: 8, fontSize: 16, borderWidth: 1, borderColor: '#e0e0e0' },
  resultsList: { padding: 10 },
  resultCard: { backgroundColor: '#fff', borderRadius: 8, padding: 15, marginBottom: 10 },
  resultName: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  resultType: { fontSize: 11, color: '#007AFF', fontWeight: 'bold', marginBottom: 5 },
  resultDescription: { fontSize: 13, color: '#666' },
  noResults: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  noResultsText: { fontSize: 16, color: '#999' }
});