import json

def parse(filename):
    print(f'Processing {filename}')
    content_raw = ''
    # read file
    with open(filename) as file:
        content_raw = file.readlines()
    
    # get total harem value from start of file
    content_processed = []
    content_raw.pop(0)
    content_raw.pop(0)
    value_total = int(content_raw.pop(0).split(':')[1])
    content_raw.pop(0)

    # filter out empty lines
    content = list(filter(None, ''.join(content_raw).split('\n')))

    # parse through content
    value_running = 0
    for line in content:
        # case: line is series
        if "http" not in line:
            series_line = line.split(' - ')
            series = ' - '.join(series_line[:-1])
            count = series_line[-1]
            count = int(count.split('/')[0])
            # print(f'Is series {series} with {count} character(s)')
        # case: line is character
        else:
            name_and_value, image = line.split(' - ')
            name_and_value = name_and_value.split()
            name = ' '.join(name_and_value[:-2])
            value = ' '.join(name_and_value[-2:])
            value_running += int(value.split()[0])
            image = image.rstrip('\n')
            # print({'Character': name, 'Series': series, 'Value': value, 'Image': image})
            content_processed.append({'Character': name, 'Series': series, 'Value': value, 'Image': image})

    # print(content_processed)
    if value_total != value_running:
        print(f'Harem kakera value does not match. Expected {value_total}, got {value_running}.')
    else:
        print('Harem processed successfully')
    
    # convert to json and return
    return json.dumps(content_processed, indent=4)

if __name__ == "__main__":
    with open('harem.json', 'w') as file:
        file.writelines(parse("harem.txt"))