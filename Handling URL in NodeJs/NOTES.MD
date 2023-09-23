# URL
<ul>
<li>A URL, which stands for Uniform Resource Locator, is a reference or address used to access resources on the internet.</li> 
<li>URLs are used to specify the location of a particular resource, such as a web page, image, file, or service, and they are an essential part of how the World Wide Web functions.</li>
</ul>

## Anatomy of a URL

![Anatomy]("https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL/mdn-url-all.png")

### 1.Scheme:
 indicates the protocol that the browser must use to request the resource (a protocol is a set method for exchanging or transferring data around a computer network) such as "http," "https," "ftp," or "mailto."

### 2.Authority (Domain Name + Port):

 #### 2.1 Domain:
     This is the domain name or IP address of the server where the resource is located, e.g., "www.example.com" or an IP address like "192.168.1.1."

 #### 2.2 Port Number(Optional):
    This specifies the port number to use when connecting to the server. If not provided, the default port for the protocol is used (e.g., 80 for HTTP, 443 for HTTPS).

### 3.Path:
   This indicates the specific location or path to the resource on the server's file system or within the application. It often starts with a slash ("/") and can include multiple subdirectories.

### 4.Query Parameters(optional): 
These are used to pass data to the resource, typically in the form of key-value pairs. Query parameters are separated from the path by a question mark ("?") and are separated from each other by ampersands ("&").

### 5.Fragment Identifier(optional):
 This specifies a specific section or anchor within the resource, often used in web pages to scroll to a specific part of a page.

URLs are fundamental in web development, as they allow you to access, share, and link to various online resources. They are used in web browsers, APIs, and many other applications that involve retrieving or referencing data on the internet.

