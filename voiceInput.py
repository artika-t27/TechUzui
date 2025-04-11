from gtts import gTTS
import os

def speak_text(text, lang='hi'):
    try:
        tts = gTTS(text=text, lang=lang)
        tts.save("output.mp3")
        print("✅ Voice file saved as output.mp3")
        # For Windows
        os.system("start output.mp3")

    except Exception as e:
        print(f"Text-to-speech error: {e}")

# Optional test
if __name__ == "__main__":
    hindi_text = "यह योजना किसानों को वित्तीय सहायता प्रदान करती है।"
    speak_text(hindi_text, lang='hi')
