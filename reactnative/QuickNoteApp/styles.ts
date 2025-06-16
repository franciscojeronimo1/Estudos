import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EFFFFE',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 8,
  },
  activeCategory: {
    backgroundColor: '#B6F0E0',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#CFF7F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 24,
    color: '#222',
  },
  noteItem: {
    backgroundColor: '#F0FBFA',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  noteText: {
    fontSize: 16,
  },
});