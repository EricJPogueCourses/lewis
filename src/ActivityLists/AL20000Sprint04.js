import React from 'react'
import { NavLink } from 'react-router-dom'

export const al20000Sprint04 = ( props ) => {
	return (

<div>
<h4>Introduction to Computer Science</h4>
<h5>Sprint 4: Selection, Repetition, String, Lists, and Dictionaries</h5>

<p>Sprint 4. Where does the time go?</p>

<p>Let's start with what we hope to learn in sprint [[Todo: X]]:</p>
<ul style={{ listStyleType:'square' }}>
	<li>[[Todo]]</li>

	<li>Understand Selection and Repetition</li>
	<li>Effectively work with Strings, Lists, and Dictionaries</li>
	<li>Create and update Python application that utilize Objects and Drawing</li>
</ul>

<p>Below is our sprint 4 activities list:</p>
<ol>
	<li>Stay focused on the due dates<NavLink to='/calendar/4'>[calendar]</NavLink></li>
	<li><em>Review sprint 4 assignments including Lab 4, Quiz 4, Discussion 4, and Reflection 4</em></li>
	<li>Start early and consistently work on assignments</li>
	<li>Recall signing up for Safari Books Online which is available to you free through Lewis University
		<a href='https://learning.oreilly.com/home/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Thoroughly read chapters 2 of Lubanovic while completing each of the exercises</li>

	<li><em>Make your initial Discussion post by the middle of the sprint</em></li>
	<li>Complete “HTML Programming - Part 2” from W3C<NavLink to='/activity/html'>[link]</NavLink>~4 hours</li>


	<li>Complete “<em>Todo:</em>Programming Assignment”<NavLink to='/activity/getting-to-know-each-other'>[link]</NavLink></li>

	<li>Read Chapter 7 of Dale review the associated lecture <NavLink to='/activity/dale-chapter-07'>[video]</NavLink></li>

	<li><em>Complete Discussion by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit all assignments include your Lab, Quiz, and Reflection</em></li>
</ol>

</div>

	)
}