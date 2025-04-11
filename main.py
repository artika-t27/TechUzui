from deep_translator import GoogleTranslator
from gtts import gTTS
import os
import time

# Only Indian languages with full names
indian_languages = {
    'Hindi': 'hi',
    'Bengali': 'bn',
    'Tamil': 'ta',
    'Telugu': 'te',
    'Gujarati': 'gu',
    'Malayalam': 'ml',
    'Kannada': 'kn',
    'Marathi': 'mr',
    'Punjabi': 'pa',
    'Urdu': 'ur',
    'Odia': 'or'
}

def translate_text(text, target_language_name):
    try:
        lang_code = indian_languages[target_language_name]
        translated = GoogleTranslator(source='auto', target=lang_code).translate(text)
        return translated
    except Exception as e:
        print(f"❌ Translation error: {e}")
        return None

def speak_text(text, language_name):
    try:
        lang_code = indian_languages[language_name]
        tts = gTTS(text=text, lang=lang_code)
        filename = f"voice_{int(time.time())}.mp3"
        tts.save(filename)
        print("🔊 Playing translated voice...\n")
        os.system(f"start {filename}")  # Use 'open' for macOS or 'xdg-open' for Linux
    except Exception as e:
        print(f"❌ Text-to-speech error: {e}")

def show_language_menu():
    print("\n🌐 Choose a language to translate into:\n")
    for name in sorted(indian_languages.keys()):
        print(f"  {name}")
    print()

if __name__ == "__main__":
    while True:
        print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
        input_text = input("💬 Enter a sentence in English (or type 'exit' to quit): ").strip()
        if input_text.lower() == 'exit':
            print("👋 Exiting...")
            break

        show_language_menu()
        selected_language = input("✍️ Enter language name from above: ").strip().title()

        if selected_language not in indian_languages:
            print("⚠️ Invalid language name! Try again.")
            continue

        translated_text = translate_text(input_text, selected_language)

        if translated_text:
            print(f"\n📝 Translated ({selected_language}): {translated_text}")
            speak_text(translated_text, selected_language)
