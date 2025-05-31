// src/screens/InternshipScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InternshipScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Internship Opportunities</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Why are you interested?"
        value={message}
        onChangeText={setMessage}
        multiline
      />

      <Button title="Submit" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default InternshipScreen;
