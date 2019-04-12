# Train-Schedule

This is a webpage that can list train times in a table taken from a firebase database.

The most trouble I had was in creating the functions that would calculate the time based off of the
initial times and the frequency of train occurances, but I was able to do it eventually after some
struggle.

The html and styling I mostly stole from the employee sheet activity we did in class. Some additional
styling would be nice but I focused my time on this assignment with tinkering with the functionality.

I was able to complete the bonus activity of making the minutes til train arrival tic off every minute
and refreshing the next train time when one came. I doubt I did this in the most efficient manner and 
am curious if there are simpler ways to get the current time rather than setting a 60s interval when
the page is loaded to calculate time off the inital load time. The only other way I can think of is 
also using an interval but have that take the current moment every interval and calculate off that to 
give a more accurate time.

Other things that would be nice to include would be resetting the trains at either the end of the day or
when the station would close. Currently the 'next' trains will simply go past midnight. I suppose an if statement
checking if the train would leave before the end of the working day could solve that. In addition I didn't
get around to the edit/remove feature but I think it would be a matter of allowing the user to put in edit
values and then use them to edit the values in firebase and then update the html with the new data.
