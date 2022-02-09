package com.web.curation.model.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.curation.model.entity.CampingBasicEntity;
import com.web.curation.model.repository.CampingBasicRepository;

@Service
public class CampingBasicDAOImpl implements CampingBasicDAO {
	
	CampingBasicRepository campingBasicRepository;
	
	@Autowired
	public CampingBasicDAOImpl(CampingBasicRepository campingBasicRepository) {
		this.campingBasicRepository = campingBasicRepository;
	}
	
	@Override
	public CampingBasicEntity saveOneCampingBasic(CampingBasicEntity campingBasicEntity) {
		campingBasicRepository.save(campingBasicEntity);
		
		return campingBasicEntity;
	}
	
	@Override
	public CampingBasicEntity getOneCampingBasicById(Integer campId) {
		CampingBasicEntity campingBasicEntity = campingBasicRepository.getById(campId);
		
		return campingBasicEntity;
	}
	
	@Override
	public List<CampingBasicEntity> getListCampingBasicAll() {
		List<CampingBasicEntity> list = campingBasicRepository.findAll();
		
		return list;
	}	
	
	@Override
	public List<CampingBasicEntity> getListCampingBasicByKeywordEntity(String keyword) {
		List<CampingBasicEntity> list = campingBasicRepository.findByFacltNmLike("%" + keyword + "%");
		
		return list;
	}
}
