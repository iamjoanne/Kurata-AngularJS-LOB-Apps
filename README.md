#AngularJS Line of Business Apps
### Kurata-AngularJS-LOB-Apps

Currently working on module 7... but there's a bug with the Save button's ng-disabled directive:

I finished module 7, where we add validation to the form, however, have been stuck on fixing the Save button's ng-disabled directive:
- Not sure if it has anything to do with the version of angular she had in the tutorial vs. the current version I am using, but the documentation was straightforward & I still couldn't figure it out so I posted on [Stack Overflow](http://stackoverflow.com/questions/32282204/my-submit-buttons-ng-disabled-directive-is-not-working-properly). I'll update if anyone answers.
- In my productEditInfoView.html, I thought the ng-class validation that check if the form.input.$valid && form.input.$dirty should check ||, but then it was wrong.
- I also found another possible solution (but I don't remember where, no link) to add to the ng-disabled to check form.$invalid || form.$pending, but that didn't make a difference, also tried data-ng disabled, but no change.

**Button shouldn't be disabled if form is valid, but I suppose at this first point of editing an exisiting product it's OK.**
![button shouldn't be disabled if form is valid](http://i.imgur.com/yKbmpYJ.png)

**Button doesn't change, I've erased the current info in the inputs.**
![button disabled on edit, erasing input](http://i.imgur.com/RplBwrI.png)

**But after re-entering info in the inputs to make sure they're valid again, the button remains disabled.**
![button still disabled after re-entering valid input](http://i.imgur.com/BVokBqz.png)

**Button works fine when adding a new product, toggles enabled & disabled.**
![button works fine when adding new product](http://i.imgur.com/Ia5DeEk.png)

### This is module 6 finished:

![productList](http://i.imgur.com/SdTBup8.jpg)

![productEditTags](http://i.imgur.com/rgqMFhP.jpg)

I was stuck on module 6, concatenating the new tags to the object's tags array:
- When adding new tags, it would put the new values visually in front, though the index is correct, it seemed view related.
- I then thought it could be the filter she used in the editTagsView where we display the tags, with the ng-repeat directive.
- The orderBy filter seemed to be the culprit, two solutions:
  1. Remove the orderBy filter.
  2. Add the property name you are going to order it by.

*I'm not 100% sure what was causing it, another assumption was the libraries' versions I was using vs. her lessons. Quick fix, nonetheless!*
