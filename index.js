function random_choice(array) {
    return  Math.floor(Math.random()*array.length)
    } 

function text(array) {
    return array[random_choice(array)]
}

function upper(text) {
    return text[0].toUpperCase() + text.slice(1)
}

const text_start = ["When i was little ", "Once upon a time", "This beautifull evening", 
                    "On friday evening", "Later the same day", "First thing in the morning",
                    "When the dinosaurs lived", "When people used led as slug repelent",
                    "In the last year of that most important century"]

const text_link = ["I", "my dog", "my sister", "she", "my kitten", "that piece of block",
                     "the puzzle", "a wriggly worm", "this little light", "a giant tree", "my Mommy",
                    "my Daddy"]

const text_adverb = ["spilled milk", "screamed very loudly", "tripped over a rock", 
                    "found a purpose", "saw a big red tent", "swam in the river", 
                    "flew in the sky"]

const adverbs_of_time = ["after that" , "then", "moment later", "afterwards", 
                     "few minutes after that", "ocasionally"]

const adverbs_of_manner = ["quickly", "kindly", "patiently", "generously", "beautifully", 
                           "fast"]
        
const verb = ["ran", "jumped", "swam", "spied", "climbed", "found"]

const noun = ["a mountain", "a pond", "a river", "a house", "a road"]

const the_end = ["they lived happily ever after", "after that things went right",
                 "the end", "they never looked back", "till now they laugh about it",
                 "no one knows about this", "after that, they went back home"]



const generated_text = () => { 
        return text(text_start) + " " + text(text_link) + " " + text(text_adverb) + ". " + upper(text(text_link)) + " " + text(adverbs_of_time) + " " + text(adverbs_of_manner) +
               " " + text(verb) + " " + text(noun) + ". " + upper(text(the_end))}


const addText = () => {
    // const replace = document.getElementsById("main") 
    // replace.firstChild.nodeValue = "dupa"
    
    document.getElementById("text_area").innerHTML = generated_text()
}   

const button = document.getElementById("button")


button.addEventListener("click", () => {addText()}) 