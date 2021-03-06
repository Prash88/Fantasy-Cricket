/**
 * Created with JetBrains WebStorm.
 * User: gazelle
 * Date: 3/2/14
 * Time: 2:32 PM
 * To change this template use File | Settings | File Templates.
 */
angular.module('fantasyApp.services.ipl', [])
    .factory('IPL', function() {
        var IPL = {};
        IPL.players = [
            {
                "Player":"Mahendra Singh Dhoni",
                "Nation":"India",
                "Type":"Wicket Keeper",
                "Price":"Retained",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Chennai Super Kings"
            },
            {
                "Player":"Ravindra Jadeja",
                "Nation":"India",
                "Type":"All-Rounder",
                "Price":"Retained",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Chennai Super Kings"
            },
            {
                "Player":"Ravichandran Ashwin",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"Retained",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Chennai Super Kings"
            },
            {
                "Player":"Dwayne Bravo",
                "Nation":"West Indies",
                "Type":"All-Rounder",
                "Price":"Retained",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Chennai Super Kings"
            },
            {
                "Player":"Suresh Raina",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"Retained",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Chennai Super Kings"
            },
            {
                "Player":"Faf Du Plessis",
                "Nation":"South Africa",
                "Type":"Batsman",
                "Price":"4,75,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Chennai Super Kings"
            },
            {
                "Player":"Dwayne Smith",
                "Nation":"West Indies",
                "Type":"Batsman",
                "Price":"4,50,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Chennai Super Kings"
            },
            {
                "Player":"Brendon McCullum",
                "Nation":"New Zealand",
                "Type":"Wicket Keeper",
                "Price":"3,25,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Chennai Super Kings"
            },
            {
                "Player":"Ashish Nehra",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"2,00,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Chennai Super Kings"
            },
            {
                "Player":"Mohit Sharma",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"2,00,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Chennai Super Kings"
            },
            {
                "Player":"Ishwar Pandey",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"1,50,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Chennai Super Kings"
            },
            {
                "Player":"Ben Hilfenhaus",
                "Nation":"Australia",
                "Type":"Bowler",
                "Price":"1,00,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Chennai Super Kings"
            },
            {
                "Player":"John Hastings",
                "Nation":"Australia",
                "Type":"All-Rounder",
                "Price":"50,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Chennai Super Kings"
            },
            {
                "Player":"Samuel Badree",
                "Nation":"West Indies",
                "Type":"Bowler",
                "Price":"30,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Chennai Super Kings"
            },
            {
                "Player":"Matt Henry",
                "Nation":"New Zealand",
                "Type":"Bowler",
                "Price":"30,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Chennai Super Kings"
            },
            {
                "Player":"Mithun Manhas",
                "Nation":"India",
                "Type":"All-Rounder",
                "Price":"30,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Chennai Super Kings"
            },
            {
                "Player":"Vijay Shankar",
                "Nation":"India",
                "Type":"All-Rounder",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Chennai Super Kings"
            },
            {
                "Player":"Ronit More",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Chennai Super Kings"
            },
            {
                "Player":"Baba Aparajith",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Chennai Super Kings"
            },
            {
                "Player":"Pawan Negi",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Chennai Super Kings"
            },
            {
                "Player":"Dinesh Karthik",
                "Nation":"India",
                "Type":"Wicket Keeper",
                "Price":"12,50,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"Kevin Pietersen",
                "Nation":"England",
                "Type":"Batsman",
                "Price":"9,00,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"Murali Vijay",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"5,00,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"Mohammad Shami",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"4,25,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"Nathan Coulter-Nile",
                "Nation":"Australia",
                "Type":"Bowler",
                "Price":"4,25,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"Quinton De Kock",
                "Nation":"South Africa",
                "Type":"Wicket Keeper",
                "Price":"3,50,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"Manoj Tiwary",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"2,80,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"Jaydev Unadkat",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"2,80,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"Jean-Paul Duminy",
                "Nation":"South Africa",
                "Type":"Batsman",
                "Price":"2,20,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"Ross Taylor",
                "Nation":"New Zealand",
                "Type":"Batsman",
                "Price":"2,00,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"Kedar Jadhav",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"2,00,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"Rahul Sharma",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"1,90,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"Mayank Agarwal",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"1,60,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"Laxmi Ratan Shukla",
                "Nation":"India",
                "Type":"All-Rounder",
                "Price":"1,50,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"James Neesham",
                "Nation":"New Zealand",
                "Type":"All-Rounder",
                "Price":"1,00,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"Wayne Parnell",
                "Nation":"South Africa",
                "Type":"Bowler",
                "Price":"1,00,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"Shahbaz Nadeem",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"85,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"Saurabh Tiwary",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"70,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"Siddarth Kaul",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"45,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"Rahul Shukla",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"40,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"Jayant Yadav",
                "Nation":"India",
                "Type":"All-Rounder",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"HS Sharath",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"Milind Kumar",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Delhi Daredevils"
            },
            {
                "Player":"David Miller",
                "Nation":"South Africa",
                "Type":"Batsman",
                "Price":"Retained",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"Manan Vohra",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"Retained",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"Mitchell Johnson",
                "Nation":"Australia",
                "Type":"All-Rounder",
                "Price":"6,50,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"Glenn Maxwell",
                "Nation":"Australia",
                "Type":"All-Rounder",
                "Price":"6,00,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"George Bailey",
                "Nation":"Australia",
                "Type":"Batsman",
                "Price":"3,25,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"Virender Sehwag",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"3,20,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"Rishi Dhawan",
                "Nation":"India",
                "Type":"All-Rounder",
                "Price":"3,00,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"Wriddhiman Saha",
                "Nation":"India",
                "Type":"Wicket Keeper",
                "Price":"2,20,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"Shaun Marsh",
                "Nation":"Australia",
                "Type":"Batsman",
                "Price":"2,20,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"Cheteshwar Pujara",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"1,90,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"Beuran Hendricks",
                "Nation":"South Africa",
                "Type":"Bowler",
                "Price":"1,80,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"Lakshmipathy Balaji",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"1,80,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"Thisara Perera",
                "Nation":"Sri Lanka",
                "Type":"All-Rounder",
                "Price":"1,60,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"Gurkeerat Singh",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"1,30,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"Murali Kartik",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"1,00,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"Sandeep Sharma",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"85,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"Mandeep Singh",
                "Nation":"India",
                "Type":"All-Rounder",
                "Price":"80,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"Akshar Patel",
                "Nation":"India",
                "Type":"All-Rounder",
                "Price":"75,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"Parvinder Awana",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"65,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"Shardul Thakur",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"20,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"Anureet Singh",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"20,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"Shivam Sharma",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"Karanveer Singh",
                "Nation":"India",
                "Type":"All-Rounder",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Kings XI Punjab"
            },
            {
                "Player":"Gautam Gambhir",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"Retained",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Kolkata Knight Riders"
            },
            {
                "Player":"Sunil Narine",
                "Nation":"West Indies",
                "Type":"Bowler",
                "Price":"Retained",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Kolkata Knight Riders"
            },
            {
                "Player":"Jacques Kallis",
                "Nation":"South Africa",
                "Type":"All-Rounder",
                "Price":"5,50,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Kolkata Knight Riders"
            },
            {
                "Player":"Robin Uthappa",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"5,00,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Kolkata Knight Riders"
            },
            {
                "Player":"Piyush Chawla",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"4,25,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Kolkata Knight Riders"
            },
            {
                "Player":"Yusuf Pathan",
                "Nation":"India",
                "Type":"All-Rounder",
                "Price":"3,25,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Kolkata Knight Riders"
            },
            {
                "Player":"Shakib Al Hasan",
                "Nation":"Bangladesh",
                "Type":"All-Rounder",
                "Price":"2,80,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Kolkata Knight Riders"
            },
            {
                "Player":"Morne Morkel",
                "Nation":"South Africa",
                "Type":"Bowler",
                "Price":"2,80,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Kolkata Knight Riders"
            },
            {
                "Player":"R Vinay Kumar",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"2,80,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Kolkata Knight Riders"
            },
            {
                "Player":"Umesh Yadav",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"2,60,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Kolkata Knight Riders"
            },
            {
                "Player":"Manish Pandey",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"1,70,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Kolkata Knight Riders"
            },
            {
                "Player":"Chris Lynn",
                "Nation":"Australia",
                "Type":"Batsman",
                "Price":"1,30,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Kolkata Knight Riders"
            },
            {
                "Player":"Patrick Cummins",
                "Nation":"Australia",
                "Type":"Bowler",
                "Price":"1,00,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Kolkata Knight Riders"
            },
            {
                "Player":"Ryan Ten Doeschate",
                "Nation":"Netherlands",
                "Type":"All-Rounder",
                "Price":"1,00,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Kolkata Knight Riders"
            },
            {
                "Player":"Suryakumar Yadav",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"70,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Kolkata Knight Riders"
            },
            {
                "Player":"Andre Russell",
                "Nation":"West Indies",
                "Type":"All-Rounder",
                "Price":"60,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Kolkata Knight Riders"
            },
            {
                "Player":"Manvinder Bisla",
                "Nation":"India",
                "Type":"Wicket Keeper",
                "Price":"60,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Kolkata Knight Riders"
            },
            {
                "Player":"Veer Pratap Singh",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"40,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Kolkata Knight Riders"
            },
            {
                "Player":"Kuldeep Singh Yadav",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"40,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Kolkata Knight Riders"
            },
            {
                "Player":"Debabrata Das",
                "Nation":"India",
                "Type":"Wicket Keeper",
                "Price":"20,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Kolkata Knight Riders"
            },
            {
                "Player":"Sayan Sekhar Mandal",
                "Nation":"India",
                "Type":"All-Rounder",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Kolkata Knight Riders"
            },
            {
                "Player":"Rohit Sharma",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"Retained",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Mumbai Indians"
            },
            {
                "Player":"Kieron Pollard",
                "Nation":"West Indies",
                "Type":"All-Rounder",
                "Price":"Retained",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Mumbai Indians"
            },
            {
                "Player":"Harbhajan Singh",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"Retained",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Mumbai Indians"
            },
            {
                "Player":"Ambati Rayudu",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"Retained",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Mumbai Indians"
            },
            {
                "Player":"Lasith Malinga",
                "Nation":"Sri Lanka",
                "Type":"Bowler",
                "Price":"Retained",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Mumbai Indians"
            },
            {
                "Player":"Michael Hussey",
                "Nation":"Australia",
                "Type":"Batsman",
                "Price":"5,00,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Mumbai Indians"
            },
            {
                "Player":"Corey Anderson",
                "Nation":"New Zealand",
                "Type":"All-Rounder",
                "Price":"4,50,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Mumbai Indians"
            },
            {
                "Player":"Pragyan Ojha",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"3,25,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Mumbai Indians"
            },
            {
                "Player":"Zaheer Khan",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"2,60,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Mumbai Indians"
            },
            {
                "Player":"Aditya Tare",
                "Nation":"India",
                "Type":"Wicket Keeper",
                "Price":"1,60,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Mumbai Indians"
            },
            {
                "Player":"Jasprit Bumrah",
                "Nation":"India ",
                "Type":"Bowler",
                "Price":"1,20,00,000",
                "Foreign":"1",
                "Uncapped":"1",
                "Club":"Mumbai Indians"
            },
            {
                "Player":"Jalaj Saxena",
                "Nation":"India",
                "Type":"All-Rounder",
                "Price":"90,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Mumbai Indians"
            },
            {
                "Player":"Josh Hazlewood",
                "Nation":"Australia",
                "Type":"Bowler",
                "Price":"50,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Mumbai Indians"
            },
            {
                "Player":"Marchant De Lange",
                "Nation":"South Africa",
                "Type":"Bowler",
                "Price":"30,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Mumbai Indians"
            },
            {
                "Player":"Krismar Santokie",
                "Nation":"West Indies",
                "Type":"Bowler",
                "Price":"30,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Mumbai Indians"
            },
            {
                "Player":"Ben Dunk",
                "Nation":"Australia",
                "Type":"Wicket Keeper",
                "Price":"20,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Mumbai Indians"
            },
            {
                "Player":"CM Gautam",
                "Nation":"India",
                "Type":"Wicket Keeper",
                "Price":"20,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Mumbai Indians"
            },
            {
                "Player":"Apoorv Wankhade",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Mumbai Indians"
            },
            {
                "Player":"Pawan Suyal",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Mumbai Indians"
            },
            {
                "Player":"Sushant Marathe",
                "Nation":"India",
                "Type":"Wicket Keeper",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Mumbai Indians"
            },
            {
                "Player":"Shreyas Gopal",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Mumbai Indians"
            },
            {
                "Player":"Shane Watson",
                "Nation":"Australia",
                "Type":"All-Rounder",
                "Price":"Retained",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Ajinkya Rahane",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"Retained",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"James Faulkner",
                "Nation":"Australia",
                "Type":"Bowler",
                "Price":"Retained",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Stuart Binny",
                "Nation":"India",
                "Type":"All-Rounder",
                "Price":"Retained",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Sanju Samson",
                "Nation":"India",
                "Type":"Wicket Keeper",
                "Price":"Retained",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Steven Smith",
                "Nation":"Australia",
                "Type":"All-Rounder",
                "Price":"4,00,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Brad Hodge",
                "Nation":"Australia",
                "Type":"Batsman",
                "Price":"2,40,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Rajat Bhatia",
                "Nation":"India",
                "Type":"All-Rounder",
                "Price":"1,70,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Tim Southee",
                "Nation":"New Zealand",
                "Type":"Bowler",
                "Price":"1,20,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Dhawal Kulkarni",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"1,10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Abhishek Nayar",
                "Nation":"India",
                "Type":"All-Rounder",
                "Price":"1,00,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Kane Richardson",
                "Nation":"Australia",
                "Type":"Bowler",
                "Price":"1,00,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Ben Cutting",
                "Nation":"Australia",
                "Type":"Bowler",
                "Price":"80,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Karun Nair",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"75,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Unmukt Chand",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"65,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Iqbal Abdullah",
                "Nation":"India",
                "Type":"All-Rounder",
                "Price":"65,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Deepak Hooda",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"40,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Dishant Yagnik",
                "Nation":"India",
                "Type":"Wicket Keeper",
                "Price":"30,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Kevon Cooper",
                "Nation":"West Indies",
                "Type":"All-Rounder",
                "Price":"30,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Vikramjeet Malik",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"20,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Ankit Sharma",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Rahul Tewatia",
                "Nation":"India",
                "Type":"All-Rounder",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Ankush Bains",
                "Nation":"India",
                "Type":"Wicket Keeper",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Amit Mishra",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Pravin Tambe",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Rajasthan Royals"
            },
            {
                "Player":"Virat Kohli",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"Retained",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Royal Challangers Bangalore"
            },
            {
                "Player":"Chris Gayle",
                "Nation":"West Indies",
                "Type":"Batsman",
                "Price":"Retained",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Royal Challangers Bangalore"
            },
            {
                "Player":"AB de Villiers",
                "Nation":"South Africa",
                "Type":"Batsman",
                "Price":"Retained",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Royal Challangers Bangalore"
            },
            {
                "Player":"Yuvraj Singh",
                "Nation":"India",
                "Type":"All-Rounder",
                "Price":"14,00,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Royal Challangers Bangalore"
            },
            {
                "Player":"Mitchell Starc",
                "Nation":"Australia",
                "Type":"Bowler",
                "Price":"5,00,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Royal Challangers Bangalore"
            },
            {
                "Player":"Albie Morkel",
                "Nation":"South Africa",
                "Type":"All-Rounder",
                "Price":"2,40,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Royal Challangers Bangalore"
            },
            {
                "Player":"Varun Aaron",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"2,00,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Royal Challangers Bangalore"
            },
            {
                "Player":"Ashok Dinda",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"1,50,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Royal Challangers Bangalore"
            },
            {
                "Player":"Parthiv Patel",
                "Nation":"India",
                "Type":"Wicket Keeper",
                "Price":"1,40,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Royal Challangers Bangalore"
            },
            {
                "Player":"Muttiah Muralitharan",
                "Nation":"Sri Lanka",
                "Type":"Bowler",
                "Price":"1,00,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Royal Challangers Bangalore"
            },
            {
                "Player":"Ravi Rampaul",
                "Nation":"West Indies",
                "Type":"Bowler",
                "Price":"90,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Royal Challangers Bangalore"
            },
            {
                "Player":"Nic Maddinson",
                "Nation":"Australia",
                "Type":"Batsman",
                "Price":"50,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Royal Challangers Bangalore"
            },
            {
                "Player":"Harshal Patel",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"40,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Royal Challangers Bangalore"
            },
            {
                "Player":"Vijay Zol",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"30,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Royal Challangers Bangalore"
            },
            {
                "Player":"Abu Nechim Ahmed",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"30,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Royal Challangers Bangalore"
            },
            {
                "Player":"Sachin Rana",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"20,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Royal Challangers Bangalore"
            },
            {
                "Player":"Shadab Jakati",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"20,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Royal Challangers Bangalore"
            },
            {
                "Player":"Sandeep Warrier",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Royal Challangers Bangalore"
            },
            {
                "Player":"Tanmay Mishra",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Royal Challangers Bangalore"
            },
            {
                "Player":"Yogesh Takawale",
                "Nation":"India",
                "Type":"Wicket Keeper",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Royal Challangers Bangalore"
            },
            {
                "Player":"Yuzvendra Chahal",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Royal Challangers Bangalore"
            },
            {
                "Player":"Shikhar Dhawan",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"Retained",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"Dale Steyn",
                "Nation":"South Africa",
                "Type":"Bowler",
                "Price":"Retained",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"David Warner",
                "Nation":"Australia",
                "Type":"Batsman",
                "Price":"5,50,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"Amit Mishra",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"4,75,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"Bhuvneshwar Kumar",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"4,25,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"Aaron Finch",
                "Nation":"Australia",
                "Type":"Batsman",
                "Price":"4,00,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"Karn Sharma",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"3,75,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"Darren Sammy",
                "Nation":"West Indies",
                "Type":"All-Rounder",
                "Price":"3,50,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"Ishant Sharma",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"2,60,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"Irfan Pathan",
                "Nation":"India",
                "Type":"All-Rounder",
                "Price":"2,40,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"Moises Henriques",
                "Nation":"Australia",
                "Type":"All-Rounder",
                "Price":"1,00,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"KL Rahul",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"1,00,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"Parveez Rasool",
                "Nation":"India",
                "Type":"All-Rounder",
                "Price":"95,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"Jason Holder",
                "Nation":"West Indies",
                "Type":"Bowler",
                "Price":"75,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"Venugopal Rao",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"55,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"Naman Ojha",
                "Nation":"India",
                "Type":"Wicket Keeper",
                "Price":"50,00,000",
                "Foreign":"0",
                "Uncapped":"0",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"Brendan Taylor",
                "Nation":"Zimbabwe",
                "Type":"Wicket Keeper",
                "Price":"30,00,000",
                "Foreign":"1",
                "Uncapped":"0",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"Prasanth Parameswaran",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"30,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"Amit Paunikar",
                "Nation":"India",
                "Type":"Wicket Keeper",
                "Price":"20,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"Ashish Reddy",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"20,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"Srikkanth Anirudha",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"20,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"Ricky Bhui",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"Chama Milind",
                "Nation":"India",
                "Type":"Bowler",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Sunrisers Hyderabad"
            },
            {
                "Player":"Manprit Juneja",
                "Nation":"India",
                "Type":"Batsman",
                "Price":"10,00,000",
                "Foreign":"0",
                "Uncapped":"1",
                "Club":"Sunrisers Hyderabad"
            }
        ];
        IPL.positions = [
            {"abbr":"ALL",  "pos":"Allrounder"},
            {"abbr":"BAT",  "pos":"Batsman"},
            {"abbr":"BOW",  "pos":"Bowler"}
        ];
        IPL.clubs = [
            {"abbr":"CSK",  "name":"Chennai Super Kings", logo:"/app/img/200px-Chennai_Super_Kings_Logo.png"},
            {"abbr":"DD",  "name":"Delhi Daredevils", logo: "/app/img/200px-Delhi_Daredevils_Logo.png"},
            {"abbr":"KXP",  "name":"Kings XI Punjab", logo:"/app/img/Kings_XI_Punjab.png"},
            {"abbr":"KKR",  "name":"Kolkata Knight Riders", logo:"/app/img/200px-Kolkata_Knight_Riders_Logo.png"},
            {"abbr":"MI",  "name":"Mumbai Indians", logo:"/app/img/200px-Mumbai_Indians_Logo.png"},
            {"abbr":"RR",  "name":"Rajasthan Royals", logo:"/app/img/200px-Rajasthan_Royals_Logo.png"},
            {"abbr":"RCB",  "name":"Royal Challangers Bangalore", logo:"/app/img/200px-Royal_Challengers_Bangalore_Logo.png"},
            {"abbr":"SRH",  "name":"Sunrisers Hyderabad", logo:"/app/img/200px-SunRisers_Hyderabad_Logo.png"}
        ];
        return IPL;
    });