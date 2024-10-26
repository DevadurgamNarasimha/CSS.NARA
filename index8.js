const sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",
    buildSentence: function() {
        if (!this.subject || !this.verb || !this.object) {
            return "Incomplete sentence";
        }
        return (this.subject && this.verb && this.object);
    },
    updateProperty: function(property, value) {
        if (this.hasOwnProperty(property)) {
            if (property === "verb" && value === "") {
                console.log("Incomplete sentence");
                return;
            }
            this[property] = value;
        } else {
            console.log("Invalid property");
        }
    }
};


// Example 1
console.log(sentenceBuilder.buildSentence()); 

// Example 2
sentenceBuilder.updateProperty("verb", "am learning");
console.log(sentenceBuilder.buildSentence()); 

// Example 3
sentenceBuilder.updateProperty("subject", "The cat");
console.log(sentenceBuilder.buildSentence()); 

// Example 4
sentenceBuilder.updateProperty("mood", "happy"); 

// Example 5
sentenceBuilder.updateProperty("verb", "");
console.log(sentenceBuilder.buildSentence()); 