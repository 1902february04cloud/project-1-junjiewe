import boto3

dynamodb = boto3.resource('dynamodb', region_name='us-east-1')

def put(event, context):
    table = dynamodb.Table('Laptop')

    brand_name = event['Laptop_Brand']
    laptop_name = event['Laptop_Name']
    laptop_size = event['Laptop_Size']
    price = event['Starting_Price']

    table.put_item(
        Item={
            'Laptop_Brand' : brand_name,
            'Laptop_Name' : laptop_name,
            'Laptop' : laptop_size,
            'Starting_Price' : price
        }
    )

    return 'Laptop created successfully'
