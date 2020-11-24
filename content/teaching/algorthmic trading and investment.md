---
title: Algorithmic trading and investment
---

# Aim
The purpose of this course is not to introduce students to the vast array of machine learning algorithms (Advanced Analytics and Machine Learning will begin to do this). The purpose is to introduce the emerging field of Financial Machine Learning (FML) as a complement to traditional financial research techniques. Context is king in modern statistical learning, and financial datasets use to solve modern investment problems offer distinct challenges, which makes choosing an generic algorithm a relatively secondary goal. 
	
## How to get a top grade
| Grade Range | What you need to demonstrate | What moves you up within grade band|
| :---:| :---:|:----------------:|
| 80-100 | Thorough and systematic knowledge and understanding of the module content. A clear grasp of the issues involved, with evidence of innovative and the original use of learning resources.  Knowledge beyond module content. Clear evidence of independent thought and originality. Methodological rigour. High critical judgement and a confident grasp of complex issues.|Originality of argument|
|70-79| Methodological rigour.  Originality. Critical judgement. Evidence of use of additional learning resources.|Methodological rigour|
|60-69|Very good knowledge and understanding of module content. Well argued answers. Evidence of originality and critical judgement.  Sound methodology. Critical judgement and some grasp of complex issues |Extent of use of additional or non-core learning resources|
|50-59| Good knowledge and understanding of the module content. Reasonably well argued.  Largely descriptive or narrative in focus. Methodological application is not consistent or thorough.|Understanding of the main issues|
|40-49| Lacking methodological application. Adequately argued.  Basic understanding and knowledge. Gaps or inaccuracies but not damaging.|Relevance of knowledge displayed|
|0-39| Little relevance material and/or inaccurate answer or incomplete. Disorganised and irrelevant material and misunderstanding.  Minimal or no relevant material.|Strength of argument|
	
## Learning Outcome
	
 - Understanding of the application of algorithms and machine learning to finance.
	- Introducing to using algorithms to research contemporary finance problems.
	- Introducing to cloud computing for finance.
	- Learn to combine R+python in an agile, durable and credible way.
	- Using state-of-the-art cloud computing solutions (Rstudio Server Pro).
	- Develop independent problem solving techniques.
	- Learn the properties of algorithms through monte carlo simulations:
	
 >> Fake it before you make it
	
 - Introduction to the use of financial machine learning to *explain* modern phenomenon in finance. 
- Understand how credible theory is needed to build successful algorithmic trading and investment strategies
	- how can we use ML to build better financial theories?
	
	## Overview
This module will introduce the modern practices in quantitative investing using algorithms and computer age statistical inference. The module is based on the emerging topic of [financial data science](https://jfds.pm-research.com/). 
	As Efron and Hastie (2016) explains:
>> Broadly speaking, algorithms are what statisticians do while inference says why they do 
them. A energetic brand of the statistical enterprise has ﬂourished in the new century, data science, emphasizing algorithmic thinking rather than its inferential justiﬁcation.
	
While the era of "Big Data" has provide a backdrop for the rapid expansion of immense computer-based processing algorithms, for instance random forest for prediction, inferential arguments for their support are emerging as an exciting new area.  This is true for financial research questions where the complexity of the **data story**^[Or more formally the data generating process which underpins the sample] result in notoriously noise covariance matrices.  A  small percentage of information these matrices contain is *signal*, which is tpyically systemically supressed by arbitrage forces. This course will introduce best practice techniques in financial data science which can help illicit economic meaningful *signal* and answer contemporary financial research questions.
	
# Course material
	
## Reading
1. López de Prado, Marcos. 2020. "Machine Learning for Asset Managers." In Elements in Quantitative Finance. Cambridge University Press. 
2. ------. 2018. Advances in Financial Machine Learning. John Wiley & Sons.
3. Efron, Bradley, and Trevor Hastie. 2016. Computer Age Statistical Inference. Cambridge University Press.
	 
## Course plan
	
| Topic | Week | Learning outcome| Book chapters | Papers to read |
| :---:| :---:|:----------------:|:-------------:|:--------------:|
| Why study financial machine learning? | 1 | The current state-of-play in quant finance industry. The common fallacy around ML in finance. The ML alternatives to classical approach for scientific theory investigation| Book 1 Chapter 1| (Easley et al., 2020; Wasserstein et al., 2019; Chen, 2020)
|Denoising and detoning | 2 | Covariance matrices in financial are ill-conditioned as a result of a small number of independent observation used to estimate a larger number of parameters. Using ML algorithms based on the [Marcenko-Pastur theorem]() to denoise and denote financial covariance samples.|Book 1 Chapter 2|  |
|Distance metrics | 3| Financial correlation has critical limitations as a measure of codependence in financial research problems. The topic explores the use of [Shannon's entropy](https://en.wikipedia.org/wiki/Entropy_(information_theory)#:~:text=In%20information%20theory%2C%20the%20entropy,A%20Mathematical%20Theory%20of%20Communication%22.) theory using ML algorithms to capture important non-linear features of financial data.| Book 1 Chapter 3| |
| Optimal clustering |4 | A common goal in financial research problems is to seperate output group entities by maximising *intragroup* similarities or minimising *intergroup* similarities. Using the idea of distance students will be introduced ML techniques to optimise the number and composition of clusters in financial problems. |Book 1 Chapter 4| |
| Financial labels | 5| In supervised learning, financial researchers need to carefully ponder how they label their data, as labels determine the task that the algorithm is going to learn. All academic studies in finance use fixed-horizon labelling.  Return computed on fixed-time labels^[For example daily returns] exhibit substantial heteroskedasticity and dismiss all information in the intermediate returns. Students will be introduced to alternative labelling methods that overcome these limitations, including the triple-barrier, trend-scanning, and meta-labelling methods.  |Book 1 Chapter 5| |
| Explainable machine learning |6 & 7| Traditional approach to financial research use classical econometric approach which combine various specification *guesses* about functional form and explanatory variables and hunts for statistical significance misusing p-values^[This problem is so widespread that the American Statistical Association has discourage their application as a measure of statistical significance (Wasserstein,2019)]. Students will be introduced to a number of *glassbox* ML supervised learning techniques to extract robust inference of financial phenomenon.  Topics will include, Mean-Decrease Accuracy, Shapley Values and Accumulated Local Effects | Book 1 Chapter 6| Apley et al., (2020), Strumbelj and Kononenko (2014), Molnar (2019)
|Testing set overfitting| 8 & 9| Understand the dangers of backtesting using historical data and some alternatives to control for the pitfalls. Backtesting using  combinatorically purged cross-validation (CPCV), synethetic data.  Learn about important backtesting statistics |Book 1 Chapter 8, Book 2 Chapters 12-15| Prado(2019)
| Round up and numerai project |10| Review of course material and introduce to the numerai.com.  Outline of requirements for empirical research project | | |
	
### Assessment
#### Critical essay (30%)
- 30% Critical assessment essay on the following statement (1500 word limit excluding references):
	>Financial machine learning are black-box prediction engines and offer little benefit to researching phenomenon in finance beyond traditional econometric techniques
	
#### Section in the essay
	
- Introduction : Set the statement in context of modern financial research practices
- Critical literature : Use high quality research to illustrate the pros and cons of the statement.
- Experimental evidence^[optional section] : You are free to use experimental evidence using simulated data and code.
- Your conclusions : summarise and state your critical assessment of the statement using the scientific evidence that you have present in the previous sections.
	
	
	Students should produce an RMarkdown report to produce a html or pdf essay.  Due end of week 5 submitted electronically via TurnitinUK.
	
	#### Empirical research project (70%)
	- 70% Algorithmic machine learning empirical project (students should submit an Rmarkdown file which includes all their code, and output). Due at the start of the summer exam period.
	- Student will put all they have learnt into practice but build a ML-based investment algorithms to be submitted to the [numerai](https://numer.ai) tournament.
	- Deliverables= Report + Submit Forecasts to Numerai’s tournament
	
	#### Section of the report
	
	- Introduction : Contextualise the problem, describe your process, provide concluding thoughts.
	- Feature engineering: assess and adjust for stationarity, low mutual information, and dimensionality reduction
	- Feature selection
	- Modelling
	- Cross-validations
	- Model limitations critique
	- Concluding remarks
	
	### Assessment protocols
	In both cases it is important to learn how to read and critique academic papers.  This is a learning process which requires some practice.  This [link](https://medium.com/ai-saturdays/how-to-read-academic-papers-without-freaking-out-3f7ef43a070f) provide an excellent guide.
	
	## References
	Apley, Daniel W., and Jingyu Zhu. 2020. "Visualizing the Effects of Predictor Variables in Black Box Supervised Learning Models." Journal of the Royal Statistical Society. Series B, Statistical Methodology 82 (4): 1059–86.

	Athey, Susan. 2017. "Beyond Prediction: Using Big Data for Policy Problems." Science 355 (6324): 483–85.
	
	Chen,  Andrew  Y.  (2019).   "The  Limits  of  p-Hacking:  a  Thought  Experiment,"  Finance and Economics Discussion Series 2019-016.  Washington:  Board of Governors of the Federal Reserve System, https://doi.org/10.17016/FEDS.2019.016.
	
	Easley, David, Marcos López de Prado, Maureen O’Hara, and Zhibai Zhang. 2020. "Microstructure in the Machine Age." The Review of Financial Studies, July. https://doi.org/10.1093/rfs/hhaa078.
	
	Easley, David, Marcos M. López de Prado, and Maureen O’Hara. 2012. "Flow Toxicity and Liquidity in a High-Frequency World." The Review of Financial Studies 25 (5): 1457–93.
		
	Efron, B., and R. Tibshirani. 1991. "Statistical Data Analysis in the Computer Age." Science 253 (5018): 390–95.
	
	Efron, Bradley, and Trevor Hastie. 2016. Computer Age Statistical Inference. Cambridge University Press.
	
	Jacquier, Eric, and Nicholas Polson. 2011. "Bayesian Methods In Finance." In The Oxford Handbook of Bayesian Econometrics, edited by John Geweke, Gary Koop, and Herman Van Dijk. Oxford University Press.
	
	López de Prado, Marcos. 2018. Advances in Financial Machine Learning. John Wiley & Sons.
	
	------. 2019. "A Data Science Solution to the Multiple-Testing Crisis in Financial Research." The Journal of Financial Data Science, February. https://doi.org/10.3905/jfds.2019.1.099.
	
	------. 2020. "Machine Learning for Asset Managers." In Elements in Quantitative Finance. Cambridge University Press.
	
	Molnar, C. (2019): "Interpretable Machine Learning: A Guide for Making Black-Box Models Explainable." Available at https://christophm.github.io/interpretable-ml-book/
	
	
	Štrumbelj, Erik, and Igor Kononenko. 2014. "Explaining Prediction Models and Individual Predictions with Feature Contributions." Knowledge and Information Systems 41 (3): 647–65.
	
	Wasserstein, Ronald L., Allen L. Schirm, and Nicole A. Lazar. 2019. "Moving to a World Beyond ‘p < 0.05.’" The American Statistician 73 (sup1): 1–19.
	
