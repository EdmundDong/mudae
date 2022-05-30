import json

def parse(filename):
    print(f'Processing {filename}')
    content_raw = ''
    # read file
    with open(filename) as file:
        content_raw = file.readlines()
    # process content
    content_processed = []
    for line in content_raw:
        name_and_value, image = line.split(' - ')
        name_and_value = name_and_value.split()
        name = ' '.join(name_and_value[:-2])
        value = ' '.join(name_and_value[-2:])
        image = image.rstrip('\n')
        content_processed.append({'name': name, 'value': value, 'image': image})
    print(content_processed)
    
    # convert to json and return
    return json.dumps(content_processed, indent=4)

if __name__ == "__main__":
    with open('harem.json', 'w') as file:
        file.writelines(parse("harem.txt"))