import base64

input = b'TEST'

test = base64.b32encode(input)
print(test)

ans = base64.b32decode(test)
print(ans)
