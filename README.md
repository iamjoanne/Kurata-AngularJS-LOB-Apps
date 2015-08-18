#AngularJS Line of Business Apps
### Kurata-AngularJS-LOB-Apps

Currently working on module 7...

This is module 6 finished:

![productList](http://i.imgur.com/SdTBup8.jpg)

![productEditTags](http://i.imgur.com/rgqMFhP.jpg)

I was stuck on module 6, concatenating the new tags to the object's tags array:
- When adding new tags, it would put the new values visually in front, though the index is correct, it seemed view related.
- I then thought it could be the filter she used in the editTagsView where we display the tags, with the ng-repeat directive.
- The orderBy filter seemed to be the culprit, two solutions:
  1. Remove the orderBy filter.
  2. Add the property name you are going to order it by.

*I'm not 100% sure what was causing it, another assumption was the libraries' versions I was using vs. her lessons. Quick fix, nonetheless!*
