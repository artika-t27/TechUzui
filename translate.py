from googletrans import Translator

def translate_text(text, dest_lang='hi'):
    """
    Translates the given text to the target language.

    :param text: English input text
    :param dest_lang: Target language code (e.g., 'hi' for Hindi)
    :return: Translated text
    """
    try:
        translator = Translator()
        result = translator.translate(text, dest=dest_lang)
        return result.text
    except Exception as e:
        print(f"Translation error: {e}")
        return text  # fallback to original

# Optional test
if __name__ == "__main__":
    original = "This scheme provides financial support to farmers."
    translated = translate_text(original, dest_lang='hi')
    print("Translated:", translated)
