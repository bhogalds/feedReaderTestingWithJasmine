# Project Overview

This project is to test a web-based application that reads RSS feeds. Jasmine is used to write the test suites and specs to test the basic functionality of feedreader application. 


# Test suites and specs

All test suites ands specs are defined in jasmine/spec/feedreader.js 
Open the index.html in the root directory of the project after unzipping the zip file to view the test results.
1. First test that loops through each feed in the `allFeeds` object and ensures it has a URL defined _and_ that the URL is not empty

2. Next spec loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty

3. Under the menu suite tests   ensure that the menu element is hidden by default and  the menu changes visibility when the menu icon is clicked. 

4. In the  test suite named `"Initial Entries"` tests  ensures when the `loadFeed` function is called and completes its work and there is at least a single `.entry` element within the `.feed` container and in the `"New Feed Selection"` tests that  when a new feed is loaded by the `loadFeed` function that the content actually changes.



# Testing

By changing expectations in each test they can be tested for failures / pass.