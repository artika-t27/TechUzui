def speak_text(text, language_name):
    try:
        import time
        lang_code = indian_languages[language_name]
        # Speak it aloud
        tts = gTTS(text=text, lang=lang_code)
        filename = f"voice_{int(time.time())}.mp3"
        tts.save(filename)
        print("🔊 Playing translated voice...\n")
        os.system(f"start {filename}")  # Use 'start' for Windows
    except Exception as e:
        print(f"❌ Text-to-speech error: {e}")