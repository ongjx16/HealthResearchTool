from io import BytesIO

def upload_file(file):
    if file.content_type != 'application/pdf':
        raise ValueError('File type not supported. Please upload a PDF file.')
    file_bytes = BytesIO(file.read())
    return file_bytes

if __name__ == '__main__':
    file_path = input('Enter the path to the PDF file: ')
    with open(file_path, 'rb') as f:
        file_bytes = upload_file(f)
        print(f'File uploaded. Bytes size: {len(file_bytes.getvalue())}')
