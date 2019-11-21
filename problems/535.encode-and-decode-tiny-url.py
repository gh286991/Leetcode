#
# @lc app=leetcode id=535 lang=python
#
# [535] Encode and Decode TinyURL
#

# @lc code=start
import base64
class Codec:

    def encode(self, longUrl):
        """Encodes a URL to a shortened URL.
        
        :type longUrl: str
        :rtype: str
        """
        return base64.b64encode(longUrl)
        

    def decode(self, shortUrl):
        """Decodes a shortened URL to its original URL.
        
        :type shortUrl: str
        :rtype: str
        """
        return base64.b64decode(shortUrl)
        

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(url))
# @lc code=end
