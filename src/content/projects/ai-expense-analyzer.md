---
title: "AI Expense Analyzer"
description: "An AI-powered Streamlit app that categorizes bank statement transactions and visualizes spending habits."
date: 2026-11-08
tags: ["Python", "AI", "Streamlit", "Pandas", "Plotly", "Finance"]
link: "https://expense-analyzer-cyhwkhy4czftfjivq7vgeb.streamlit.app/"
repo: "https://github.com/ShreyCodezz/expense-analyzer"
---

I built the AI Expense Analyzer to make it easier to see the story hidden in a
bank statement. A CSV export has all the raw transactions, but finding useful
patterns in it usually means sorting, grouping, and adding things up by hand.
I wanted a small tool that could take care of that first pass and make the
results easy to explore.

## From statement to spending picture

The flow starts with a CSV upload. The app reads each transaction's date,
description, and amount, then uses keyword matching to assign it a category.
That keeps the categorization logic straightforward: descriptions that match
known terms are grouped together, and the resulting categories can be compared
instead of scanning a long list of individual purchases.

I used two charts to make those comparisons useful in different ways. The pie
chart shows how spending is divided across categories, while the bar chart
shows how spending changes month by month. Together they give a quick overview
of both where the money went and when it was spent.

## The data matters

The app expects three columns: `Date`, `Description`, and `Amount`. Expenses
should have negative amounts and income should have positive amounts. Once the
statement is exported in that format, it can be uploaded to the live app and
the categorized transactions and charts are ready to inspect.

## Building it

The project brought together a few tools that fit the job well. Python handles
the application logic, Pandas works with the transaction data, Streamlit
provides the upload-and-results interface, and Plotly renders the charts. The
interesting part was connecting those pieces into a flow that goes from a
plain CSV to a useful visual summary without adding extra steps.

## Try it or run it locally

The [live app](https://expense-analyzer-cyhwkhy4czftfjivq7vgeb.streamlit.app/)
is deployed and ready to use. To run the project locally, clone the
[repository](https://github.com/ShreyCodezz/expense-analyzer), install its
requirements, and start Streamlit:

```sh
git clone https://github.com/ShreyCodezz/expense-analyzer.git
cd expense-analyzer
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
streamlit run app.py
```

This is a small project, but it turns a familiar, messy data format into
something much easier to understand at a glance.
