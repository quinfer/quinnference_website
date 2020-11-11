# Algorithmic trading and investment


## Overview
This module will introduce some of the modern practices in quantitative investing using algorithms and computer age statistical inference. The module is based on the emerging topic of [financial data science](https://jfds.pm-research.com/). 
As [@Efron2016] explains:
>Very broadly speaking, algorithms are what statisticians do while inference says why they do 
them. A particularly energetic brand of the statistical enterprise has ﬂourished in the new century, data science, emphasizing algorithmic thinking rather than its inferential justiﬁcation.

While the era of "Big Data" has provide a backdrop for the rapid expansion of immense computer-based processing algorithms, for instance random forest for prediction, inferential arguments for their support are emerging as an exciting new area.  This is especially true for financial research questions where the complexity of the **data story**^[Or more formally the data generating process which underpins the sample] result in notoriously noise covariance matrices.  A relatively small percentage of information these matrices contain is *signal*, which is tpyically systemically supressed by arbitrage forces. This course will introduce some best practice techniques in financial data science which can help illicit economic meaningful *signal* and answer contemporary financial research questions.

## Reading
 1. López de Prado, Marcos. 2020. “Machine Learning for Asset Managers.” In Elements in Quantitative Finance. Cambridge University Press. 
 2. ———. 2018. Advances in Financial Machine Learning. John Wiley & Sons.
 3. Efron, Bradley, and Trevor Hastie. 2016. Computer Age Statistical Inference. Cambridge University Press.
 
## Course plan

| Topic | Week | Learning outcome| Reading|Papers|
| - | ------ |---|---|----
| Myths about financial machine learning | 1 | The common fallacy surround the use of ML in finance and the ML alternatives to scientific investigation using traditional econometrics| Book 1 Chapter 1
|Denoising and detoning | 2 | Covariance matrices in financial are usually ill-conditioned as a result of a small number of independent observation used to estimate a larger number of parameters. Using ML algorithms based on the [Marcenko-Pastur theorem]() to denoise and denote financial covariance samples.|Book 1 Chapter 2|  
|Distance metrics | 3| Financial correlation has some critical limitations as a measure of codependence in financial research problems. The topic explores the use of [Shannon's entropy](https://en.wikipedia.org/wiki/Entropy_(information_theory)#:~:text=In%20information%20theory%2C%20the%20entropy,A%20Mathematical%20Theory%20of%20Communication%22.) theory using ML algorithms to capture important non-linear features of financial data.| Book 1 Chapter 3|
| Optimal clustering |4 | A common goal in financial research problems is to seperate output group entities by maximising *intragroup* similarities or minimising *intergroup* similarities. Using the idea of distance students will be introduced so some ML techniques to optimise the number and composition of clusters in financial problems. |Book 1 Chapter 4| 
| Financial labels | 5| In supervised learning, financial researchers need to carefully ponder how they label their data, as labels determine the task that the algorithm is going to learn. Virtually all academic studies in Financial ML use fixed-horizon labelling.  Return computed on fixed-time labels^[For example daily returns] exhibit substantial heteroskedasticity and dismiss all information in the intermediate returns. Students will be introduced to some alternative labelling methods that overcome these limitations, including the triple-barrier, trend-scanning, and meta-labelling methods.  |Book 1 Chapter 5|
| Feature importance analysis |6 & 7| Traditional approach to financial research use classical econometric approach which combine various specification *guesses* about functional form and explanatory variables and hunts for statistical significance typically misusing p-values^[This is such a prevalance problem that the American Statistical Association has discourage their application gonig forward as a measure of statistical significance [@Wasserstein2019]]. Students will be introduced to a number of *glassbox* ML supervised learning techniques to extract robust inference of financial phenomenon.  Topics will include, Mean-Decrease Accuracy, Shapley Values and Accumulated Local Effects | Book 1 Chapter 6| [@Apley2020, @Strumbelj2014]
|Testing set overfitting| 8 & 9| |Book 1 Chapter 8| [@Prado2019]
|Revision |10||

### Assessment
30% Critical assessment essay on the following statement:
>Financial machine learning are black-box prediction engines and offer little benefit to researching phenomenon in finance beyond traditional econometric techniques

Due end of week 4 submitted electronically via TurnitinUK.

70% Computer-based practical end of semester exam.

<Insert video of John Simons on ML in Finance>



## References

@BOOK{Efron2016,
  title     = "Computer Age Statistical Inference",
  author    = "Efron, Bradley and Hastie, Trevor",
  abstract  = "The twenty-first century has seen a breathtaking expansion of
               statistical methodology, both in scope and in influence. 'Big
               data', 'data science', and 'machine learning' have become
               familiar terms in the news, as statistical methods are brought
               to bear upon the enormous data sets of modern science and
               commerce. How did we get here? And where are we going? This book
               takes us on an exhilarating journey through the revolution in
               data analysis following the introduction of electronic
               computation in the 1950s. Beginning with classical inferential
               theories - Bayesian, frequentist, Fisherian - individual
               chapters take up a series of influential topics: survival
               analysis, logistic regression, empirical Bayes, the jackknife
               and bootstrap, random forests, neural networks, Markov chain
               Monte Carlo, inference after model selection, and dozens more.
               The distinctly modern approach integrates methodology and
               algorithms with statistical inference. The book ends with
               speculation on the future direction of statistics and data
               science.",
  publisher = "Cambridge University Press",
  month     =  jul,
  year      =  2016,
  language  = "en"
  
@ARTICLE{Wasserstein2019,
  title     = "Moving to a World Beyond ``p < 0.05''",
  author    = "Wasserstein, Ronald L and Schirm, Allen L and Lazar, Nicole A",
  journal   = "Am. Stat.",
  publisher = "Taylor \& Francis",
  volume    =  73,
  number    = "sup1",
  pages     = "1--19",
  month     =  mar,
  year      =  2019
  
@ARTICLE{Apley2020,
  title     = "Visualizing the effects of predictor variables in black box
               supervised learning models",
  author    = "Apley, Daniel W and Zhu, Jingyu",
  journal   = "J. R. Stat. Soc. Series B Stat. Methodol.",
  publisher = "Wiley",
  volume    =  82,
  number    =  4,
  pages     = "1059--1086",
  month     =  sep,
  year      =  2020,
  copyright = "http://onlinelibrary.wiley.com/termsAndConditions\#vor",
  language  = "en"
}

@ARTICLE{Strumbelj2014,
  title     = "Explaining prediction models and individual predictions with
               feature contributions",
  author    = "{\v S}trumbelj, Erik and Kononenko, Igor",
  journal   = "Knowl. Inf. Syst.",
  publisher = "Springer Science and Business Media LLC",
  volume    =  41,
  number    =  3,
  pages     = "647--665",
  month     =  dec,
  year      =  2014,
  language  = "en"
}


@ARTICLE{noauthor_2019-ia,
  title     = "A data science solution to the multiple-testing crisis in
               financial research",
  abstract  = "Most discoveries in empirical finance are false, as a
               consequence of selection bias under multiple testing. Although
               many researchers are aware of this problem, the solutions
               proposed in the literature tend to be complex and hard to
               implement. In this article, the author reduces the problem of
               selection bias in the context of investment strategy development
               to two sub-problems: determining the number of essentially
               independent trials and determining the variance across those
               trials. The author explains what data researchers need to report
               to allow others to evaluate the effect that multiple testing has
               had on reported performance. He applies his method to a real
               case of strategy development and estimates the probability that
               a discovered strategy is false.",
  journal   = "The Journal of Financial Data Science",
  publisher = "Pageant Media US",
  month     =  feb,
  year      =  2019
}

@ARTICLE{Prado2019,
  title     = "A data science solution to the multiple-testing crisis in
               financial research",
  author    = "L{\'o}pez de Prado, Marcos",
  abstract  = "Most discoveries in empirical finance are false, as a
               consequence of selection bias under multiple testing. Although
               many researchers are aware of this problem, the solutions
               proposed in the literature tend to be complex and hard to
               implement. In this article, the author reduces the problem of
               selection bias in the context of investment strategy development
               to two sub-problems: determining the number of essentially
               independent trials and determining the variance across those
               trials. The author explains what data researchers need to report
               to allow others to evaluate the effect that multiple testing has
               had on reported performance. He applies his method to a real
               case of strategy development and estimates the probability that
               a discovered strategy is false.",
  journal   = "The Journal of Financial Data Science",
  publisher = "Pageant Media US",
  month     =  feb,
  year      =  2019
}

