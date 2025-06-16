import React, { JSX, useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';
import { styles } from './styles';
import { Category, Note } from './types';
import { NoteService } from './services/noteService';

export default function QuickNoteApp(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.Work);
  const [inputText, setInputText] = useState<string>('');
  const [notes, setNotes] = useState<Note[]>([]);
  const fadeAnim = new Animated.Value(0);

  const noteService = new NoteService();

  useEffect(() => {
    setNotes(noteService.getAllNotes());
    return () => noteService.close();
  }, []);

  const handleAddNote = (): void => {
    if (!inputText.trim()) return;

    noteService.addNote({ text: inputText.trim(), category: selectedCategory });
    setNotes(noteService.getAllNotes());
    setInputText('');

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => fadeAnim.setValue(0));
  };

  const renderNote = ({ item }: { item: Note }) => (
    <Animated.View style={[styles.noteItem, { opacity: fadeAnim }]}> 
      <Text style={styles.noteText}>▣ {item.text}</Text>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quick Note</Text>
      <Text style={styles.subtitle}>What will you achieve today?</Text>
      <View style={styles.categoryContainer}>
        {Object.values(Category).map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoryButton,
              selectedCategory === cat && styles.activeCategory,
            ]}
            onPress={() => setSelectedCategory(cat)}>
            <Text>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a note"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddNote}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={notes.filter((note) => note.category === selectedCategory)}
        keyExtractor={(item) => item._id.toString()}
        renderItem={renderNote}
      />
    </View>
  );
}