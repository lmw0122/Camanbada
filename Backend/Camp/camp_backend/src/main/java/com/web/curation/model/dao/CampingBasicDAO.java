package com.web.curation.model.dao;

import java.util.List;

import com.web.curation.model.entity.CampingBasicEntity;

public interface CampingBasicDAO {
	
	CampingBasicEntity saveOneCampingBasic(CampingBasicEntity campingBasicEntity);
	CampingBasicEntity getOneCampingBasicById(Integer campId);
	List<CampingBasicEntity> getListCampingBasicAll();
	List<CampingBasicEntity> getListCampingBasicByKeywordEntity(String keyword);
}
