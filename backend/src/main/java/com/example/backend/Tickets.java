package com.example.backend;

public class Tickets {

	private final long id;
	private final String content;

	public Tickets(long id, String content) {
		this.id = id;
		this.content = content;
	}

	public long getId() {
		return id;
	}

	public String getContent() {
		return content;
	}
}