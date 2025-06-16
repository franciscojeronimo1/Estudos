import { LayoutAnimation, Platform, UIManager } from 'react-native';

export default function HomeScreen() {
    return(
        <h1>ola</h1>
    )
}

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

// Dentro do método que adiciona uma tarefa:
LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);