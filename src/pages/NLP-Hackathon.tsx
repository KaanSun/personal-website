import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "../styles/NLP-Hackathon.css"


function NLPHackathon() {
 
   const code1 = `   from sklearn.feature_extraction.text import CountVectorizer
   from sklearn.metrics import accuracy_score
   from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay
   
   from sklearn.model_selection import train_test_split
   from sklearn.naive_bayes import MultinomialNB
   from sklearn.linear_model import LogisticRegression`

   const code2 = `  
   X_train, X_test, y_train, y_test = train_test_split(Resdataset["Review"], 
   Resdataset["Liked"], test_size=0.20, random_state=60)`

   const code3 = `vectorizer = CountVectorizer()

   X_train = vectorizer.fit_transform(X_train)
   X_test = vectorizer.transform(X_test)`

   const code4 = `mnb = MultinomialNB()
   mnb.fit(X_train,y_train)
   y_pred = mnb.predict(X_test)
`   

    const code5 = `
    cmatrix = confusion_matrix(y_test, y_pred)
    cmatrix_show = ConfusionMatrixDisplay(confusion_matrix=cmatrix, display_labels=[False, True])
    import matplotlib.pyplot as plt
    
    acc = accuracy_score(y_test, y_pred)
    print(acc)
    cmatrix_show.plot()
    plt.show()`
    

    return (
        <div className="bg-grey standard-margin">
            <h2 className="text-white ">NLP Hackathon</h2>
            <p> The objective of this hackathon was to find the best way to predict if a Google Maps review of a restaurant 
                was a positive or a negative review. The teams had about an hour to complete the project.
                 The project was restricted to certain spesifications: </p>
            
            <div className='left-align'>
                <li> Can only use the <a href="https://machinelearningmastery.com/gentle-introduction-bag-words-model/">bag of words</a> model</li>

                <li>Can only use <a href="https://www.analyticsvidhya.com/blog/2017/09/naive-bayes-explained/">Bayes Naive Algorithm</a> for 
                    regression analysis. </li>
            </div>
            <br />
            <p> These are elementary methods. However, if you are into machine learning or appplied statistics, they are an 
                excellent read! 
            </p>

            <p>Here is our winning attempt with 82 percent accuracy:</p>

            <h3>Importing the libraries</h3>
            <SyntaxHighlighter className="standard-code-block" language="python" style={atomOneDark}>
                {code1}
            </SyntaxHighlighter>
            <br />
            <h3>Importing data, splitting it to training and test splits</h3>
            <SyntaxHighlighter className="standard-code-block" language="python" style={atomOneDark}>
                {code2}
            </SyntaxHighlighter>
            <i>80/20 training test split. Test split big enough to have statistical significance.</i>
            <br />
            <br />
            <h3>Training on the data:</h3>
            
            <SyntaxHighlighter className="standard-code-block" language="python" style={atomOneDark}>
                {code3}
            </SyntaxHighlighter>
            <br />
            <h3>Predicting Test Results</h3>
            <SyntaxHighlighter className="standard-code-block" language="python" style={atomOneDark}>
                {code4}
            </SyntaxHighlighter>
            <br />
            <h3>Plotting the Results and the Confusion Matrix</h3>
            <SyntaxHighlighter className="standard-code-block" language="python" style={atomOneDark}>
                {code5}
            </SyntaxHighlighter>
            <br />
            
            <p>Interesting that there are always more type II errors than type I errors. Perhaps I can 
                investigate the reason for this some day. Might be due to some parameters on our model 
                &#40;maybe the level of significance?&#41;	 .</p>
            <img className='profile-picture-big' src="src/assets/confusion.png" alt="" />
           
        </div>
    );
}

export default NLPHackathon;