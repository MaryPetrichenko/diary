DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(100) NOT NULL,
    post VARCHAR(700) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    imageurl VARCHAR(255),
    PRIMARY KEY (id)
);

INSERT INTO diary (title, post, imageurl)
VALUES 
('New Year, New Me?', 'New Year’s Resolutions:
1. Lose weight (but not in a sad, lettuce-eating way).
2. Stop falling for charming but utterly useless men.
3. Drink less wine… or at least switch to one that doesn’t give me a headache.
4. Find true love (or at least someone who texts back).
This year, I will be a sophisticated, independent woman. Or at least I’ll try.', 'https://s.yimg.com/ny/api/res/1.2/HiNwQUR52dqtlTa3hZ_CgQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTQyMDtoPTQyMDtjZj13ZWJw/https://media.zenfs.com/en-US/homerun/investorplace_417/84a6f34a1d8f2603cc3592c67f4d2072'),
('The Tragedy of a Mini-Break', 'Mini-breaks are supposed to be romantic, NOT a chance for your boyfriend to reveal that he’s actually a cheating toad. Lesson learned: Never trust a man who packs silk pajamas.
On the bright side, at least I got a free hotel breakfast out of it.', 'https://img.etimg.com/thumb/msid-97911853,width-300,height-225,imgsize-25470,resizemode-75/happy-valentines-day-2023-25-funny-memes-and-messages-about-valentines-day-that-will-make-you-laugh-out-loud.jpg'),
('Gym Disaster, Part 10', 'Tried yoga today in an effort to be more zen. Instead, managed to:
1. Fall over mid-warrior pose.
2. Accidentally kick instructor in shin.
3. Sweat in a manner most unbecoming of a lady.
Have concluded yoga is just an expensive way to humiliate oneself.', 'https://i.pinimg.com/236x/bb/e8/cd/bbe8cded76e25d51f9368002008ddbbe.jpg'),
('Mum’s Matchmaking Madness', 'Mum has taken it upon herself to find me a husband. Have now been set up with:
1. A man who collects taxidermy squirrels.
2. Someone who referred to himself as a “crypto king.”
3. A 43-year-old who lives with his mother and cat.
Beginning to think eternal spinsterhood isn’t so bad.', 'https://media.makeameme.org/created/me-waiting-to-5bc2b6.jpg');
