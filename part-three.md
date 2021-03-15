## Part Three - How the API may work (Product)

The last challenge doesn't involve coding. The "main movie" on the home screen would ultimately be decided by an API -- it would have the responsibility of telling the caller which movie should get this prominent position on the user's screen. To decide this, the API will need to take various things into account, and work out which movie is most "deserving" of getting this position. Your challenge is to brainstorm different pieces of data or information about the user or the movie that could be used to make this decision. Here are some examples:

- Exclude movies the user has stopped part way through, because that means they disliked them
- If there is a newly released movie starring the user's favourite actor, prefer to show that
- etc.

There is definitely no right or wrong answer here. We're just interested in any ideas you have about how something like that may be built. Write your ideas down into a text file to save alongside your code.

## Answers

- Match user to a group of users with similar preferences and recommend based on real interactions of other users.
- Prefer to show titles in the same categories & genres that the user usually watch.
- Based on the time of day, day of week, holidays... prefer to show titles that user enjoyed watching historically.
- Profiles in the same account (Netflix) could also be considered, it's highly likely that one profile will also enjoy other's profile's titles.
