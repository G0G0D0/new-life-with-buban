document.getElementById('openBoxButton').addEventListener('click', function () {
    const dayInput = document.getElementById('dayInput').value.toLowerCase();
    if (dayInput === 'saturday') {
        // Open the advanced box
        document.getElementById('box').style.display = 'none';
        document.getElementById('omnitrixContainer').style.display = 'block';
    } else {
        alert('Incorrect day! Try again.');
    }
});

// First Click: Show Heart Symbol (like Omnitrix transformation)
document.getElementById('omnitrixIcon').addEventListener('click', function () {
    // Hide the Omnitrix symbol and show the heart
    document.getElementById('omnitrixIcon').style.display = 'none';
    document.getElementById('heartIcon').style.display = 'block';
});

// Second Click: Heart Transformation
document.getElementById('heartIcon').addEventListener('click', function () {
    // Flash effect for transformation
    const flashEffect = document.getElementById('flashEffect');
    flashEffect.classList.add('flash-visible');

    setTimeout(() => {
        flashEffect.classList.remove('flash-visible');
        // Show matrix letter
        document.getElementById('omnitrixContainer').style.display = 'none';
        document.getElementById('letterContainer').style.display = 'block';

        const letterText = `
        Boo, I want you to read this in private. What I said yesterday was because I see an exact copy of my amma when I see you, and I see myself as an exact copy of my dad. As time passes, it only gets worse. It feels like you'll eventually become someone you never wanted to be, someone you’ve spent your life trying not to become. It's as if all the decisions you made, trying to avoid that, are pushing you closer to that same destiny. My mom used to plead with my dad for the simplest things, and maybe I am like him, no different. But there’s one thing I can do to distinguish myself from him—setting my loved ones free, letting them be their best versions, and allowing them to be happy.

        It took my mom over two decades to get away from my dad, and now, she hates him with every ounce of her being. I can see that hatred in her eyes, and it scares me because I can foresee you looking at me the same way in the future. The more I fight with you, the more I yell, and the more you stay by my side despite it all, the more it feels like history is repeating itself. I know secrets are unhealthy for a relationship, but I’ve become so used to protecting myself that way. I never thought I’d be with anyone, and then you came into my life, bringing balance to everything with that sweet "kutty gap la gudugudu."

        You gave me something no one else ever has—balance. I know you want me to live in the present, but the bad feelings I get at night won’t let me. Even if there’s a 1% chance of those fears becoming real, I’ll do whatever it takes to prevent them. It’s been years since I cared about myself, boo. Everything I do now is to gain the power to protect the people I care about, to pursue my mission without putting them at risk. I’m not afraid of dying; I’m afraid of living in a world where the people I love suffer because of me.

    All the surgeries, the torture, the fights, the blood, losing people, losing mobility—it’s twisted me. I know I’m not sane. I’m trying, but the odds aren’t always in my favor, and I made peace with that long ago. When you asked, "Was it that easy to give up?" I said yes because I can’t bear the thought of you resenting me for decades. But you always come back to me with that soft, loving "gudugudu." Neenga baby ahhh, achooo. Here, let me lift you up and carry you—my little buban.

    Sometimes, I think I wasn’t ready for this level of responsibility at 21 or 22. I’m not complaining, but it feels like too much to handle at times. You are the only one I don’t have to feel like an adult around. I can be a baby with you, and that’s a feeling I cherish. It’s like when I had everything—money, health, no responsibilities—I wasn’t doing anything with it. But now, when I want to do everything, it feels like I have nothing. Yet, all those problems disappear when I’m with you, buban. You are my happiness, my peace, my everything.

Truthfully, you’re the reason I’ve made it this far. Even though you say you don’t make my life easy, it’s because of you that I’ve been able to achieve so much. Without you, I wouldn’t be financially stable, I wouldn’t be pursuing new ventures, and I certainly wouldn’t be as happy as I am now. You’ve brought so much good into my life, and I’ll forever be grateful for that. You’ve taught me more than any book I’ve read, and that says a lot.

All I want is to kiss you, cuddle you, watch movies, work on projects, have babies, and spend the rest of my life with you. I could do that every day for a lifetime, and I know I’d never get bored. You’re my speed force, the one who keeps me moving forward, who gives me purpose. Everything I do is for you, buban, and for us.

You are my lucky charm, and this relationship has transformed me into a better person in every way. I am deeply flawed—secretive, emotionless, hurting—but I am also just a baby who loves you. You’ve given me hope and happiness, and I can’t imagine my life without you in it. I love you more than words can say, and I am truly sorry for everything.

ipppadikku,
buban
        `;

        let currentIndex = 0;
        const letterElement = document.getElementById('letter');

        // Function to simulate letter generation effect
        function generateLetter() {
            if (currentIndex < letterText.length) {
                letterElement.textContent += letterText[currentIndex];
                currentIndex++;
                setTimeout(generateLetter, 50); // Adjust speed if needed
            } else {
                // Time out after 2 minutes
                setTimeout(() => {
                    letterElement.classList.add('letter-finished');
                    // Flash red after timeout and return to Omnitrix
                    setTimeout(() => {
                        document.getElementById('letterContainer').style.display = 'none';
                        document.getElementById('omnitrixContainer').style.display = 'block';
                        // Reset state to Omnitrix symbol
                        document.getElementById('omnitrixIcon').style.display = 'block';
                        document.getElementById('heartIcon').style.display = 'none';
                    }, 3000);
                }, 120000); // 120000ms = 2 minutes
            }
        }

        generateLetter();
    }, 1000); // Flash delay
});
