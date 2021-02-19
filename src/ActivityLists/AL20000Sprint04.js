import React from 'react'
import { NavLink } from 'react-router-dom'

import { MatchmakerWithPython, start, complete } from './ProgrammingAssignments'
const programmingAssignment = MatchmakerWithPython

export const al20000Sprint04 = ( props ) => {
	return (

<div>
<h4>Introduction to Computer Science</h4>
<h5>Sprint 4: Selection, Repetition, String, Lists, and Dictionaries</h5>

<p>Sprint 4. Where does the time go? Let’s write some Python code.</p>

<p>By the end of this sprint we will be able to:</p>
<ul style={{ listStyleType:'square' }}>
	<li>Create, update, and test Python applications</li>
	<li>Understand variables &amp; expressions, lists &amp; dictionaries, repetition, selection, and functions</li>
	<li>Verify our understanding of file systems</li>
	<li>Develop a basic understanding of artificial intelligence</li>
</ul>

<p>Below is our sprint 4 activities list:</p>
<ol>
<	li>Stay focused on the due dates by reviewing our course calendar<NavLink to='/calendar/4'>[link]</NavLink></li>
	<li><em>Review sprint 3 assignments including Lab 4, Quiz 4, Discussion 4, Reflection 4, and Lab Demo</em></li>
	<li>{start(programmingAssignment)}</li>

	<li>Review the CAMS Study Table tutoring options<NavLink to='/activity/study-table'>[link]</NavLink></li>
	<li>Read Dale chapter 13 Artificial Intelligence<a href='https://learning.oreilly.com/library/view/computer-science-illuminated/9781284055917/' target='_blank' rel='noopener noreferrer'>[link]</a>
		and review our chapter 13 lecture <NavLink to='/activity-dale/13'>[video]</NavLink></li>
	<li>Review “Python Programming - Part 1 &amp; Part 2” from W3C<NavLink to='/activity/python-w3c'>[link]</NavLink></li>

	<li>Complete Programming Together with MatchmakerLite - Part 1</li>
	<li><em>Submit your initial Discussion 4 post by the middle of the sprint</em></li>

	<li>Within Safari Books Online<a href='https://learning.oreilly.com/home/' target='_blank' rel='noopener noreferrer'>[link]</a>
		find “Introducing Python, 2nd Edition” by Bill Lubanovic (Lubanovic)</li>
	<li>Read Lubanovic Preface and Chapter 1 while completing “Using Code Examples” from the Preface</li>
	<li>Execute and review “quotes.py” from the Lubanovic Chapter 1 example code</li>
	<li>Complete Programming Together with MatchmakerLite - Part 2</li>

	{/* The items below should be consistent across classes. */ }
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion 4 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Lab 3, Quiz 3, and Reflection 3</em></li>
</ol>
<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help. Also, be sure to 
periodically check for new programming together tutorials<NavLink to='/activity/programming-together'>[link]</NavLink>.</p>
{extras()}
</div>

	)
}

const extras = () => {
	return (<div>	
		<p>Additional suggested activities:</p>
		<ul style={{listStyleType:'square'}}>
			<li>Review our class example code<NavLink to='/activity/example-code'>[link]</NavLink></li>
			<li>Clone the example code from “Introducing Python, 2nd Edition” by executing:<br />
				“git clone https://github.com/madscheme/introducing-python”</li>
		</ul>
	</div>)
}