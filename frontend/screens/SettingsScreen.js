import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About NetWiki</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Version</Text>
          <Text style={styles.settingValue}>1.0.0</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <TouchableOpacity style={styles.settingButton}>
          <Ionicons name="help-circle" size={20} color="#007AFF" />
          <Text style={styles.settingButtonText}>Help & Feedback</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footer}>NetWiki © 2024</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  section: { marginTop: 20, backgroundColor: '#fff', paddingVertical: 10, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#e0e0e0' },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#999', marginLeft: 15, marginTop: 10, marginBottom: 10 },
  settingItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  settingLabel: { fontSize: 16, color: '#000' },
  settingValue: { fontSize: 14, color: '#999' },
  settingButton: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  settingButtonText: { fontSize: 16, marginLeft: 15, color: '#000' },
  footer: { textAlign: 'center', marginTop: 30, marginBottom: 30, color: '#999', fontSize: 12 }
});